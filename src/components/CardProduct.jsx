import React from "react";
import Card from "./Card";
import ProductCardData from "./ProductCardData";
import "./CardProduct.css";


const CardProduct = () => {
  return (
    <div className="CardProduct-container">
      <h1 className="project-heading">Casas Temporarias</h1>
      <p className="project-p">Alquiler temporario de casas amoblados y equipados para una confortable estadía en la ciudad de Tanti Córdoba.</p>
      <div className="project-container">
        {ProductCardData.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardProduct;