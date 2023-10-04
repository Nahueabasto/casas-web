import React from "react";
import "./Slider.css";
import img from "../img/ruben.jpg";

export default function Slider(){
    return(
        <div className="hero">
      <div className="mask">
        <img className="into-img" src={img} alt="Imagen de computadora" />
      </div>
      <div className="content">
        <p></p>
        <h1></h1>
      </div>
    </div>
    )
}