import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../components/Contacto/ContactoCompleto.css";
import CardProduct from "../components/CardProduct";
export default function Inicio(){
    return(
        <div>
            <div>
                <Navbar />
                <Slider />
                <CardProduct /> 
                <Footer />
                </div>
        </div>
    )
} 