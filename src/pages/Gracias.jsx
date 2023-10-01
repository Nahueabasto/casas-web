import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gracias() {

    return(
        <div>
                <Navbar />
                <div className="contenedor-postcontacto">
            <h1>¡Gracias!</h1>
            <p>Recibimos correctamente el formulario. Nos comunicaremos a la brevedad. </p>
            </div> 
              <Footer />
        </div>
    )
}