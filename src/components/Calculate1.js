import React from 'react';
import Tilda from '../img/tilda-publishing.png';
import Layout from '../img/vscode_layout.png';


const Calculate1 = () => (
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
            <p>{`
              For events, landing pages, information sites
              \n + ease of editing
              \n + focus on design
              \n
              \n - limited functions
              \n - dirty code
              \n - monthly(11$) / yearly(105$) subscription
            `}</p>
          </div>
          <span>CRM Tilda +50$</span>
        </div>
        <div className="quest1__selector">
          <img alt="" src={Layout} />
          <div className="card__about">
            <p>{`
              Best choice for functional websites
              \n + load speed (React)
              \n + focus on efficiency
              \n + clean code
              \n + more options
              \n - need more time
              \n - knowledge to edit
            `}</p>
          </div>
          <span>Code layout +100$</span>
        </div>
      </div>
    </div>
  </>
);

export default Calculate1;