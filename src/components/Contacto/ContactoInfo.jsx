import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactoInfo.css"
import PostContacto from "./PostContacto";


export default function ContactoInfo(){
    return(
        <div className="contenedor-postcontacto">

            {/* <h1 className="contacto">Contacto</h1> */}

            <div className="contenedor-iconos">

            <div className="">
                <h4 className="h4">
                  <PhoneIcon
                    className=""
                    size={20}
                    style={{ color: " #555454", marginRight: "0.5rem", marginBottom: "-2px" }}
                  />
                  +54 9 3434 17-5364
                </h4>
                </div>

                <div className="email">
              <h4 className="h4">
                <EmailIcon
                className=""
                  size={20}
                  style={{ color: " #555454", marginRight: "0.5rem", marginBottom: "-5px" }}
                />
                n@gmail.com
              </h4>
            </div>

            <div className="location">
            <a href="https://maps.app.goo.gl/ZyRZWquPM61naZhj9" target="_blank" rel="noopener noreferrer">
              <h4 className="h4">
                <LocationOnIcon
                className=""
                  size={20}
                  style={{ color: " #555454", marginRight: "0.5rem", marginBottom: "-2px" }}
                />
                 | 
              </h4>
              </a>
            </div>

              </div>

        </div>
    )
} 