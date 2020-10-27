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
          <div className="calc">
            <div className="quest1__selector">
              <img alt="" src={Tilda} />
              <div className="card__about">
                <p>{`For events, landing pages, information sites
              \n + ease of editing
              \n + focus on design
              \n
              \n - limited functions
              \n - dirty code
              \n - monthly(11$) / yearly(105$) subscription
            `}</p>
              </div>
              <input type="checkbox" className="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1" className="checkbox__label" >CRM Tilda +50$</label>
            </div>
            <div className="quest1__selector">
              <img alt="" src={Layout} />
              <div className="card__about">
                <p>{`Best choice for functional websites
              \n + load speed (React)
              \n + focus on efficiency
              \n + clean code
              \n + more options
              \n - need more time
              \n - knowledge to edit
            `}</p>
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