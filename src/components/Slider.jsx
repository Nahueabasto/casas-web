import React from "react";
import "./Slider.css";
import img from "../img/e3.jpg";
import im from "../img/ruben.jpg";
import { Link } from "react-router-dom";

export default function Slider(){
    return(
        <div className="hero">
      <div className="mask">
        <img className="into-img" src={img} alt="Imagen de computadora" />
      </div>
      <div className="content">
      <Link to="/" >
            <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
              width="90"
              height="90"
            ></img>
          </Link>
        {/* <p>Alquiler Temporario Córdoba</p> */}
        <h2>Alquiler Temporario</h2>
        <p>Alquiler Temporario Córdoba</p>
      </div>
    </div>
    )
}