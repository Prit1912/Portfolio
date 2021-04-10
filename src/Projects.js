import React from "react";
import img1 from "./resume/python.png";
import img2 from "./resume/TCS.png";
import img3 from "./resume/js.png";
import img4 from "./resume/sk.png";
import img5 from "./resume/recipe.png";
import img6 from "./resume/portfolio.png";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Cerificates</h1>
      <div className="row">
        <div className="col-sm-4">
          <img
            src={img1}
            alt="python"
            className="img-thumbnail img_size mb-5"
            width="300px"
            height="300px"
          ></img>
        </div>
        <div className="col-sm-4">
          <img
            src={img2}
            alt="python"
            className="img-thumbnail img_size mb-5"
            width="300px"
            height="300px"
          ></img>
        </div>
        <div className="col-sm-4">
          <img
            src={img3}
            alt="python"
            className="img-thumbnail img_size mb-5"
            width="300px"
            height="300px"
          ></img>
        </div>
      </div>
      <h1 className = "text-center mt-5 mb-5">Projects</h1>
      <div className = "row row1">
          <div className = "col-sm-6">
              <h2>Google Keep Clone</h2>
              <img src={img4} alt="" className = "proj_img"/>
          </div>
          <div className = "col-sm-6">
              <h2>Recipe App</h2>
          <img src={img5} alt="" className = "proj_img"/>
          </div>
      </div>
      <div className = "row mt-5">
          <div className = "col-sm-12 img_center">
              <h2>Portfolio Website</h2>
              <img src= {img6} alt="" className = "proj_img"/>
          </div>
      </div>
    </div>
  );
}
