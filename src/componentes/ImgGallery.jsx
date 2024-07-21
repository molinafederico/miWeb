import React from "react";
import "./estilos.css"
import img01 from "../img/01.jpg"
import img02 from "../img/02.jpg"
import img03 from "../img/03.jpg"
import img04 from "../img/08.jpg"
import img05 from "../img/10.jpg"
import img06 from "../img/11.jpg"
import img07 from "../img/04.jpg"
import img08 from "../img/05.jpg"
import img09 from "../img/09.jpg"
import Img from "./img";


const ImgGallery = () => {
    return (
        <React.Fragment>
    
        <div className="galeria-container">
          <Img
          img={img01}
          alt="la casa de la cascada"
          titulo="La casa de la cascada"/>
          <Img 
          img={img02}
          alt="casa_en_meocra"
          titulo="Casa en Meocra"/>
          <Img 
          img={img03}
          alt="casa_muta"
          titulo="Casa Muta"/>
          <Img 
          img={img04}
          alt="casa_muta"
          titulo="Casa Muta"/>
          <Img 
          img={img05}
          alt="Arquitectura_Moderna"
          titulo="Arquitectura Moderna"/>
           <Img 
          img={img06}
          alt="casa_de_la_playa"
          titulo="Casa de la Playa"/>
           <Img 
          img={img07}
          alt=""
          titulo="Casa estilo Arquitectonico"/>
           <Img 
          img={img08}
          alt="cerramientos_de_aluminio"
          titulo="Cerramientos de Aluminio"/>
           <Img 
          img={img09}
          alt="la_casa_de_juanita"
          titulo="La Casa de Juanita"/>
</div>

</React.Fragment>
    )
}
export default ImgGallery
