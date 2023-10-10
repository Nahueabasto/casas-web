import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import "./Footer.css"
import ContactoInfo from "./Contacto/ContactoInfo";
import img from "../img/ruben.jpg";

export default function Footer(){

    return(
        <div className="footer">
          <div className="footer-container">

          <div className="logo">
          <Link to="/" >
            <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
              width="150"
              height="150"
            ></img>
          </Link>
          </div>  

          <div className="contacto-info">
            <ContactoInfo />
          </div>
          
          <div className="lefte">
  <div>
    <h1 style={{ color: '#fff' }}>Seguinos</h1>
  </div>
  <div className="icons">
    <a href="">
      <div className="loc">
        <InstagramIcon
          className="mui"
          size={20}
          style={{ color: "#fff", marginRight: "1rem" }}
        />
      </div>
    </a>

    <a href="">
      <div className="fa">
        <div className="h4">
          <FacebookIcon
            className="mui"
            size={20}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
        </div>
      </div>
    </a>
  </div>
</div>
            </div>

        </div>
    )

}