import React from "react";
import photo from "./resume/p11.jpg";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-row">
          <div className="col-sm-4">
            <img
              className="img-fluid img_border siz"
              src={photo}
              alt="no pic"
            />
          </div>
          <div className="col-sm-8">
            <h2>Hi, I am Prit Rojivadiya</h2>
            <p className="heading">React JS Developer</p>
            <p className="head2">
              I am curious to learn new skills and work in Healthy Environment.
            </p>
            <p className="head2">
              I would love to help the people with my skills and create a
              positive impact on them.
            </p>
            <div className = "btns">
              <a href="https://www.linkedin.com/in/prit-rojivadiya-0b505a1b7/" target = "_blank" rel="noreferrer"><button type="button" className="btn btn-primary">
              LinkedIn
            </button></a>
            <a href="https://github.com/Prit1912" target = "_blank" rel="noreferrer"><button type="button" className="btn btn-primary">
              GitHub
            </button></a>
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
