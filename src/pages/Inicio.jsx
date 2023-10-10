import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../components/Contacto/ContactoCompleto.css"

export default function Inicio(){
    return(
        <div>
            <div>
                <Navbar />
                <Slider />
                <Footer />
                </div>
        </div>
    )
} 