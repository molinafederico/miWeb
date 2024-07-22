import MenuNav from "./MenuNav"
import Portada from "./Portada"
import Footer from "./Footer"
import React from "react";
import Data from "./data.jsx"
import "./estilos.css"
const Contacto = () => {

    return (
        <React.Fragment>
    
                 <MenuNav 
         classLiContact="menu-seleccionado"
         classLinkContact="texto-menu-selecionado" />
         
        <Portada top="70px" 
      stylePortada="container-portada-contacto"
      styleInfo="container-info-portada-contacto"
      info="CONTACTO"
      info2="MFconstruccuiones" />

       <Data  />
      <Footer />
    </React.Fragment>
    )
}
 export default Contacto