import React from "react";
import Navbar from "../components/Navbar";
import Contactuli from "../components/Contacto/ContactoInfo";
import PostContacto from "../components/Contacto/PostContacto";


export default function Contacto(){
    return(
        <div>
            <div>
                <Navbar />
                <Contactuli />
                <PostContacto />
                </div>
        </div>
    )
} 