import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductCardData from "./ProductCardData";
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import GppGoodIcon from '@mui/icons-material/GppGood';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TvIcon from '@mui/icons-material/Tv';
import "./Detalle.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';


const Detalle = () => {
  const { id } = useParams();
  const [imagenActual, setImagenActual] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const casa = ProductCardData.find((casa) => casa.id === Number(id));
  const [touchStartX, setTouchStartX] = useState(null);

  const cambiarImagen = (direccion) => {
    if (direccion === "prev") {
      if (imagenActual > 0) {
        setImagenActual(imagenActual - 1);
      } else {
        setImagenActual(casa.imgsrc.length - 1);
      }
    } else if (direccion === "next") {
      if (imagenActual < casa.imgsrc.length - 1) {
        setImagenActual(imagenActual + 1);
      } else {
        setImagenActual(0);
      }
    }
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const irImagenAnterior = () => {
    setImagenActual((imagenActual - 1 + casa.imgsrc.length) % casa.imgsrc.length);
  };

  const irImagenSiguiente = () => {
    setImagenActual((imagenActual + 1) % casa.imgsrc.length);
  };

  const handleClickModal = (e) => {
    if (e.target.classList.contains('modal-background')) {
      cerrarModal();
    }
  };

  useEffect(() => {
    const handleKeyboardNavigation = (event) => {
      if (modalVisible) {
        if (event.key === 'ArrowLeft') {
          irImagenAnterior();
        } else if (event.key === 'ArrowRight') {
          irImagenSiguiente();
        }
      }
    };

    window.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      window.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [modalVisible, imagenActual]);

  /////////////////////////////////////////////

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) {
      return;
    }
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right, go to the previous image
      irImagenAnterior();
    } else if (deltaX < -50) {
      // Swipe left, go to the next image
      irImagenSiguiente();
    }

    // Reset the touch start position
    setTouchStartX(null);
  };


  return (
    <div className="detalle-f">
      <div className="imagenes-container">
      <div
          className="slider-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="leftArrow" onClick={() => cambiarImagen('prev')}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={() => cambiarImagen('next')}>
            &#10093;
          </div>
          <ul>
            {casa.imgsrc.map((item, idx) => (
              <li
                key={item.id}
                style={{ display: idx === imagenActual ? 'block' : 'none' }}
              >
                <img
                  src={item}
                  alt={`Imagen ${idx + 1}`}
                  onClick={abrirModal}
                />
              </li>
            ))}
          </ul>
          <div className="dot-container">
            {casa.imgsrc.map((_, idx) => (
              <div
                key={idx}
                className={`dot-container-item ${idx === imagenActual ? 'active' : ''}`}
                onClick={() => setImagenActual(idx)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-background" onClick={handleClickModal}>
          <div className="modal-arrow modal-arrow-left" onClick={irImagenAnterior}>
            <ArrowBackIosNewIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
          </div>
          <div className="modal-arrow modal-arrow-right" onClick={irImagenSiguiente}>
            <ArrowForwardIosIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
          </div>
          <div className="modal-close" onClick={cerrarModal}>
            <CloseIcon size={50} style={{ color: "#d6d2d2" }} />
          </div>
          <img className='imagen-modal'
            src={casa.imgsrc[imagenActual]}
            alt={`Imagen ${imagenActual + 1}`}
          />
        </div>
       
      )}

    <div className="pepe">
      <p>{casa.text}</p>
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
  </div>
  );
};

export default Detalle;


// const Detalle = () => {
//   const { id } = useParams(); // Obtén el ID de la URL
//   const listRef = useRef();
//   const [imagenActual, setImagenActual] = useState(0);
  
//   const casa = ProductCardData.find((casa) => casa.id === Number(id));


//   const cambiarImagen = (direccion) => {
//     if (direccion === "prev") {
//       if (imagenActual > 0) {
//         setImagenActual(imagenActual - 1);
//       } else {
//         // Si estás en la primera imagen y haces clic en "Anterior", avanza a la última
//         setImagenActual(casa.imgsrc.length - 1);
//       }
//     } else if (direccion === "next") {
//       if (imagenActual < casa.imgsrc.length - 1) {
//         setImagenActual(imagenActual + 1);
//       } else {
//         // Si estás en la última imagen y haces clic en "Siguiente", retrocede a la primera
//         setImagenActual(0);
//       }
//     }
//   };

//   //const primeraImagen = casa.imgsrc[imagenActual]; // Imagen actual

//   const goToSlide = (slideIndex) => {
//     console.log(slideIndex);
//     setImagenActual(slideIndex);
//   }

//   //console.log(primeraImagen)

//   return (
//     <div className="detalle-f">
//   <div className="imagenes-container">
    
//   <div className="slider-container">

//     <div className='leftArrow' onClick={() => cambiarImagen('prev')}>&#10092;</div>
//         <div className='rightArrow' onClick={() => cambiarImagen('next')}>&#10093;</div>

//       {/* <img src={primeraImagen} alt={`Imagen ${imagenActual + 1}`} /> */}
      
   
//             {casa.imgsrc.map((item, idx) => (
//               <li
//                 key={item.id}
//                 style={{ display: idx === imagenActual ? "block" : "none" }}
//               >
//                 <img
//                   src={item}
//                   alt={`Imagen ${idx + 1}`}
//                 />
//               </li>
//             ))}
          
//       <div className="dot-container">
//   {casa.imgsrc.map((_, idx) => (
//     <div
//       key={idx}
//       className={`dot-container-item ${idx === imagenActual ? "active" : ""}`}
//       onClick={() => goToSlide(idx)}
//     >
//       &#9865;
//     </div>
//   ))}
// </div>

//     </div>
//   </div>


//     <div className="pepe">
//       <p>Funcionales y cómodas unidades equipadas para 3 personas. Living comedor, cocina, baño, dormitorio cama matrimonial y sofá cama o marinera para adolescente.- Excelente Opción</p>
//       <div className="iconos-container">
//       <h4 className="icon-container">
//                   <WifiIcon
//                     className="mui"
//                     size={80}
//                     style={{ color: "#f07807", fontSize: '40px', }}
//                   />
//                  <span style={{ fontSize: '14px' }}>Wifi</span>
//                 </h4>
//                 <h4 className="icon-container">
//                   <PoolIcon
//                     className="mui"
//                     size={80}
//                     style={{ color: "#f07807", fontSize: '40px', }}
//                   />
//                  <span style={{ fontSize: '14px' }}>Pileta</span>
//                 </h4>
//                 <h4 className="icon-container">
//                   <GppGoodIcon
//                     className="mui"
//                     size={80}
//                     style={{ color: "#f07807", fontSize: '40px', }}
//                   />
//                  <span style={{ fontSize: '14px' }}>Seguridad</span>
//                 </h4>
//                 <h4 className="icon-container">
//                   <WarehouseIcon
//                     className="mui"
//                     size={80}
//                     style={{ color: "#f07807", fontSize: '40px', }}
//                   />
//                   <span style={{ fontSize: '14px' }}>Cochera cubierta</span>
//                 </h4>
//                 <h4 className="icon-container">
//                   <TvIcon
//                     className="mui"
//                     size={80}
//                     style={{ color: "#f07807", fontSize: '40px', }}
//                   />
//                  <span style={{ fontSize: '14px' }}>TV</span>
//                 </h4>
//       </div>
//     </div>
   
//     {/* Otros detalles de la casa */}
//   </div>
//   );
// };

// export default Detalle;


