import React from 'react';
import Line from '../img/Line_4.svg'
import Photo from '../img/lavr.png';

const Title = () => (
  <>
    <div className="container">
      <div className="title ">
        <div className="title__name">ILLIA LAVRENYUK</div>
        <div className="title__lines">
          <img src={Line} alt="" />
        </div>
        <h1>SITE DEVELOPER</h1>
      </div>
      <div className="line__circle">
        <img alt="" src={Photo} />
      </div>
    </div>
    <div className="case">
      <div className="wave">
      </div>
    </div>
  </>
);

export default Title;