import React from 'react';
import Macbook from '../img/macbook_pro 1.png';
import ArrowL from '../img/arrow_left.svg';
import ArrowR from '../img/arrow_right.svg';
import Iphone from '../img/iphone_11.png';
import SliderCervice from '../service/SliderCervice';


class Projects extends React.Component {
  sliderCervice = new SliderCervice();

  state = {
    id: 0,
  }

  componentDidMount() {
    this.updateSlider();
  }

  nextSlider(step) {
    let num = this.state.id + step;
    if (num === -1) num = this.state.quantity - 1;
    if (num === this.state.quantity) num = 0;
    this.setState({
      ...this.state,
      id: num,
    })
    this.updateSlider();
  }

  updateSlider = () => {
    this.sliderCervice.getSliderData()
      .then(db => this.setState({
        ...this.state,
        url: db.sites[this.state.id].url,
        screenMin: db.sites[this.state.id].screenMin,
        screenMax: db.sites[this.state.id].screenMax,
        title: db.sites[this.state.id].title,
        quantity: db.sites.length
      }))
      .catch(err => console.log(`Error: `, err))
  }

  render() {
    return (
      <>
        <div className="block__color">
          <div className="container__2">
            <div className="projects">
              <h2>MY PROJECTS</h2>
              <div className="macbook" >
                <div className="mac__slider">
                  <img alt="" src={this.state.screenMax} />
                </div>
                <div className="horizontal">
                  <img alt="" src={Macbook} />
                </div>
              </div>
              <div className="slider__buttons">
                <img alt="" src={ArrowL} onClick={() => this.nextSlider(-1)} />
                <a target="_blank" rel="noopener noreferrer"
                  href={this.state.url}
                >{this.state.title}</a>
                <img alt="" src={ArrowR} onClick={() => this.nextSlider(1)} />
              </div>
            </div>
            <div className="iphone">
              <div className="iphone__slider">
                <img alt="" src={this.state.screenMin} />
              </div>
              <div className="vertical">
                <img alt="" src={Iphone} />
              </div>
            </div>
          </div>
        </div>
        <div className="case">
          <div className="wave__2" />
        </div>

      </>
    )
  }
}

export default Projects;