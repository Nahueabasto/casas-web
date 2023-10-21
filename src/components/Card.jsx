import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const primeraImagen = props.imgsrc[0];
  console.log("ID capturado en Card:", props.id); // Agrega este console.log

  return (
    <div className="project-card">
      <img src={primeraImagen} alt="imagen" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        {/* <p>{props.text}</p> */}
        <div>
          <Link to={`/casa/${props.id}`} style={{ textDecoration: "none" }}>
            <button className="secondary-button">
              {props.view}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
