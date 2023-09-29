import React from "react";
import ContactoInfo from "./ContactoInfo";
import PostContacto from "./PostContacto";
import "./ContactoCompleto.css"

export default function ContactoCompleto(){

    return(
        <div className="containerr">
            <div className="contenedor-1">
                <ContactoInfo />
            </div>
            <div className="contenedor-2">
                <PostContacto />
            </div>
        </div>
    )
}