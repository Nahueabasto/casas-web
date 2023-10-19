import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imagen" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        {/* <p>{props.text}</p> */}
        <div >
      
        <Link to="/gracias" style={{ textDecoration: "none" }}>
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