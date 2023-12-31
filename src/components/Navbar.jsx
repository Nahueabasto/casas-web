import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/ruben.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


export default function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

  // window.addEventListener("scroll", changeColor); // para estirar el navbar cuando se baja

    return(
      <div className={color ? "header header-bg" : "header"}>
 <div className="logo-h1">
          <Link to="/" >
            <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
              width="90"
              height="90"
            ></img>
          </Link>
          <Link to="/" >
          <h1 className="text-nav">Casas</h1>
          </Link>
          </div>  
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li class="active">
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/casasenalquiler">Galeria</Link>
        </li>
        <li>
          <Link to="/Servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#d6d2d2" }} />
        ) : (
          <FaBars size={30} style={{ color: "#d6d2d2" }} />
        )}
      </div>
      </div>
    );
  }

