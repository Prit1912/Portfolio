import React from "react";

export default function About() {
  return (
    <div className="container skills">
      <h1 className="border-bottom">Skills</h1>
      <div className="row">
        <div className="col-sm-6">
          <h3>HTML5</h3>
          <div className = "progress">
            <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "80%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >80%</div>
          </div>
          <h3>CSS3</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "70%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >70%</div>
          </div>
          <h3>JavaScript</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "75%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >75%</div>
          </div>
          <h3>jQuery</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "70%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >70%</div>
          </div>
        </div>
        <div className="col-sm-6">
          <h3>React JS</h3>
          <div className = "progress">
            <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "80%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >80%</div>
          </div>
          <h3>Python</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "75%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >75%</div>
          </div>
          <h3>MySQL</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "70%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >70%</div>
          </div>
          <h3>Bootstrap4</h3>
          <div className = "progress">
          <div
              className = "progress-bar progress-bar-striped"
              role="progressbar"
              style={{width: "70%"}}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >70%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
