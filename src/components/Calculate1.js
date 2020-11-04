import React from 'react';
import Tilda from '../img/tilda-publishing.png';
import Layout from '../img/vscode_layout.png';


class Calculate1 extends React.Component {
  state = {
    quest1: '',
  }
  check() {

    return true;
  }
  render() {
    return (
      <>
        <div className="container__3">
          <div className="block__title">
            <h2>CALCULATE</h2>
            <span>Choose the basis of the site</span>
          </div>
          <div className="calc calc__img">
            <div className="quest1__selector">
              <img alt="" src={Tilda} />
              <div className="card__about">
                <p>{`For events, landing pages, information sites.
                  + ease of editing
                  + focus on design
                  
                  - limited functions
                  - dirty code
                  - monthly(11$) / yearly(105$) subscription`}</p>
              </div>
              <input type="checkbox" className="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1" className="checkbox__label" >CRM Tilda +50$</label>
            </div>
            <div className="quest1__selector">
              <img alt="" src={Layout} />
              <div className="card__about">
                <p>{`Best choice for functional websites.
                + load speed (React)
                + focus on efficiency
                + clean code
                + more options
                - need more time
                - knowledge to edit`}</p>
              </div>
              <input type="checkbox" className="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2" className="checkbox__label" >Code layout +100$</label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculate1;