import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductCardData from "./ProductCardData";
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import GppGoodIcon from '@mui/icons-material/GppGood';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TvIcon from '@mui/icons-material/Tv';
import "./Detalle.css";


const Detalle = () => {
  const { id } = useParams(); // Obtén el ID de la URL
  const listRef = useRef();
  const [imagenActual, setImagenActual] = useState(0);
  
  const casa = ProductCardData.find((casa) => casa.id === Number(id));


  const cambiarImagen = (direccion) => {
    if (direccion === "prev") {
      if (imagenActual > 0) {
        setImagenActual(imagenActual - 1);
      } else {
        // Si estás en la primera imagen y haces clic en "Anterior", avanza a la última
        setImagenActual(casa.imgsrc.length - 1);
      }
    } else if (direccion === "next") {
      if (imagenActual < casa.imgsrc.length - 1) {
        setImagenActual(imagenActual + 1);
      } else {
        // Si estás en la última imagen y haces clic en "Siguiente", retrocede a la primera
        setImagenActual(0);
      }
    }
  };

  //const primeraImagen = casa.imgsrc[imagenActual]; // Imagen actual

  const goToSlide = (slideIndex) => {
    console.log(slideIndex);
    setImagenActual(slideIndex);
  }

  //console.log(primeraImagen)

  return (
    <div className="detalle-f">
  <div className="imagenes-container">
    
  <div className="slider-container">

    <div className='leftArrow' onClick={() => cambiarImagen('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => cambiarImagen('next')}>&#10093;</div>

      {/* <img src={primeraImagen} alt={`Imagen ${imagenActual + 1}`} /> */}
      
   
            {casa.imgsrc.map((item, idx) => (
              <li
                key={item.id}
                style={{ display: idx === imagenActual ? "block" : "none" }}
              >
                <img
                  src={item}
                  alt={`Imagen ${idx + 1}`}
                />
              </li>
            ))}
          
      <div className="dot-container">
  {casa.imgsrc.map((_, idx) => (
    <div
      key={idx}
      className={`dot-container-item ${idx === imagenActual ? "active" : ""}`}
      onClick={() => goToSlide(idx)}
    >
      &#9865;
    </div>
  ))}
</div>

    </div>
  </div>


    <div className="pepe">
      <p>Funcionales y cómodas unidades equipadas para 3 personas. Living comedor, cocina, baño, dormitorio cama matrimonial y sofá cama o marinera para adolescente.- Excelente Opción</p>
      <div className="iconos-container">
      <h4 className="icon-container">
                  <WifiIcon
                    className="mui"
                    size={80}
                    style={{ color: "#f07807", fontSize: '40px', }}
                  />
                 <span style={{ fontSize: '14px' }}>Wifi</span>
                </h4>
                <h4 className="icon-container">
                  <PoolIcon
                    className="mui"
                    size={80}
                    style={{ color: "#f07807", fontSize: '40px', }}
                  />
                 <span style={{ fontSize: '14px' }}>Pileta</span>
                </h4>
                <h4 className="icon-container">
                  <GppGoodIcon
                    className="mui"
                    size={80}
                    style={{ color: "#f07807", fontSize: '40px', }}
                  />
                 <span style={{ fontSize: '14px' }}>Seguridad</span>
                </h4>
                <h4 className="icon-container">
                  <WarehouseIcon
                    className="mui"
                    size={80}
                    style={{ color: "#f07807", fontSize: '40px', }}
                  />
                  <span style={{ fontSize: '14px' }}>Cochera cubierta</span>
                </h4>
                <h4 className="icon-container">
                  <TvIcon
                    className="mui"
                    size={80}
                    style={{ color: "#f07807", fontSize: '40px', }}
                  />
                 <span style={{ fontSize: '14px' }}>TV</span>
                </h4>
      </div>
    </div>
   
    {/* Otros detalles de la casa */}
  </div>
  );
};

export default Detalle;

// const Detalle = () => {
//   const { id } = useParams(); // Obtén el ID de la URL

//   // Busca los datos de la casa correspondiente por ID
//   const casa = ProductCardData.find((casa) => casa.id === Number(id));
//   console.log(casa);

//   if (!casa) {
//     return <div>Casa no encontrada</div>;
//   }

//   // Accede a la primera imagen del array
//   const primeraImagen = casa.imgsrc[0]; // para que renderice sola la

//   return (
//     <div className="detalle-f">
//     {/* <h2>{casa.title}</h2> */}
//     {/* <div className="imagenes-container">
//       {casa.imgsrc.map((imagen, index) => (
//         <div key={index} className="imagen-item">
//           <img src={imagen} alt={`Imagen ${index}`} />
//         </div>
//       ))}
//     </div> */}
//     <div className="imagenes-container">
//         <div className="imagen-item">
//           <img src={primeraImagen} alt="Primera Imagen" />
//         </div>
//       </div>




