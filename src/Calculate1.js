import React from 'react';
import Tilda from './img/tilda-publishing.png';
import Layout from './img/vscode_layout.png';


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
          <span>CRM Tilda +50$</span>
        </div>
        <div className="quest1__selector">
          <img alt="" src={Layout} />
          <span>Code layout +100$</span>
        </div>
      </div>
    </div>

  </>
);

export default Calculate1;