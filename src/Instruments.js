import React from 'react';
import Figma from './img/Figma.png';
import Photoshop from './img/photoshop.png';
import VectorG from './img/vector_graphics.png';
import ReactJS from './img/react.png';
import JavaS from './img/js.png';
import Html5 from './img/html5.png';
import NodeJS from './img/nodejs.png';
import Form from './img/send_forms.png';
import Database from './img/database.png';


const Instruments = () => (
  <>
    <div className="case">
      <div className="wave__3" />
    </div>
    <div className="block__color">
      <div className="container__3">
        <div className="isntruments">
          <h2>INSTRUMENTS</h2>
        </div>
        <div className="container">
          <div className="instr__column">
            <h3 style={{
              background: "linear-gradient(180deg, #5E5E5E 0%, #FF0000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Design</h3>
            <div className="skill" style={{ color: "#F24E1E" }} >
              <img alt="" src={Figma} />
              <span>Figma</span>
            </div>
            <div className="skill" style={{ color: "#F20707" }} >
              <img alt="" src={Photoshop} />
              <span>Photoshop</span>
            </div>
            <div className="skill" style={{ color: "#9F3737" }} >
              <img alt="" src={VectorG} />
              <span>Vector</span>
              <div>Graphics</div>
            </div>
          </div>
          <div className="instr__column">
            <h3 style={{
              background: "linear-gradient(180deg, #0038FF 29.17%, #5EFDD7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Front-end</h3>
            <div className="skill" style={{ color: "#2A8DDF" }} >
              <img alt="" src={ReactJS} />
              <span>React</span>
              <div className="skill__details">redux/fetch</div>
            </div>
            <div className="skill" style={{ color: "#0011AC" }} >
              <img alt="" src={JavaS} />
              <span>JavaScript</span>
              <div className="skill__details">redux/fetch</div>
            </div>
            <div className="skill" style={{ color: "#E44D26" }} >
              <img alt="" src={Html5} />
              <span>Html5</span>
              <div style={{ color: "#0070BB", paddingLeft: "102px" }}>CSS3</div>
            </div>
          </div>
          <div className="instr__column">
            <h3 style={{
              background: "linear-gradient(180deg, #474747 0%, #00C52B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Back-end</h3>
            <div className="skill" style={{ color: "#666861" }} >
              <img alt="" src={NodeJS} />
              <span>Node.js</span>
            </div>
            <div className="skill" style={{ color: "#D76C00" }} >
              <img alt="" src={Form} />
              <span>Send forms</span>
              <div className="skill__details">redux/fetch</div>
            </div>
            <div className="skill" style={{ color: "#46B64A" }} >
              <img alt="" src={Database} />
              <span>Database</span>
              <div className="skill__details">redux/fetch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Instruments;