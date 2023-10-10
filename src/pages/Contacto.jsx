import React from "react";
import Navbar from "../components/Navbar";
import ContactoCompleto from "../components/Contacto/ContactoCompleto";
import Footer from "../components/Footer";
import ContactoInfo from "../components/Contacto/ContactoInfo";
import PostContacto from "../components/Contacto/PostContacto";

export default function Contacto(){
    return(
        <div>
            <div className="conteiner">
                <Navbar />
                <div className="containerr">
            <div className="contenedor-1">
                <ContactoInfo />
            </div>
            <div className="contenedor-2">
                <PostContacto />
            </div>
            </div>
            </div>
            <div className="fo">
                <Footer />
            </div>
        </div>
    )
} 