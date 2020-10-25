import React from 'react';
import Macbook from './img/macbook_pro 1.png';
import PMmax from './img/PM_max.png';
import ArrowL from './img/arrow_left.svg';
import ArrowR from './img/arrow_right.svg';
import PM_min from './img/PM_min.png';
import Iphone from './img/iphone_11.png';
// import Arrow from './img/arrow_nextBlock.svg';


const Projects = () => (
  <>
    <div className="block__color">
      <div className="container__2">
        <div className="projects">
          <h2>MY PROJECTS</h2>
          <div className="macbook" >
            <div className="mac__slider">
              <img alt="" src={PMmax} />
            </div>
            <div className="horizontal">
              <img alt="" src={Macbook} />
            </div>
          </div>
          <div className="slider__buttons">
            <img alt="" src={ArrowL} />
            <span>premiumstore.com.ua</span>
            <img alt="" src={ArrowR} />
          </div>
        </div>
        <div className="iphone">
          <div className="iphone__slider">
            <img alt="" src={PM_min} />
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
export default Projects;