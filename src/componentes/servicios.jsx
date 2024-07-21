import MenuNav from "./MenuNav"
import Portada from "./Portada"
import Footer from "./Footer"
import "./estilos.css"
import React from "react";
import ArtService from "./artService"
import { faCity, faHandshake, faHouseCircleCheck, faHouseUser, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import BtnLeerMas from "./btnLeerMas";

const Servicios = () => {

    return (
        <React.Fragment>
                       <MenuNav 
         classLiService="menu-seleccionado"
         classLinkService="texto-menu-selecionado"
         />
          <Portada top="70px" 
      stylePortada="container-portada-contacto"
      styleInfo="container-info-portada-contacto"
      info="SERVICIOS DE  "
      info2="arquitectura  y construcción"
       />
       <div className="container-servicios">
  <ArtService
    icono={<FontAwesomeIcon icon={faUsers} />}
    titulo="COORDINACIÓN DE PROYECTO"
    parrafo="El equipo de MFconstrucciones coordina cada etapa de un proyecto, que incluye la documentación de la obra, los trámites necesarios, la etapa de diseño, la logística para la compra de los materiales idóneos y finalmente la construcción." 
  />
  <ArtService 
    icono={<FontAwesomeIcon icon={faHouseUser} />}
    titulo="DISEÑO PERSONALIZADO"
    parrafo="Nuestro departamento de arquitectura se destaca por la escucha atenta a nuestros clientes y se ocupa de transformar sus ideas en realidad. Conocer el gusto y estilo de nuestros clientes es un requisito básico para iniciar un proyecto."
  />
  <ArtService
    icono={<FontAwesomeIcon icon={faNewspaper} />}
    titulo="PLANIFICACIÓN DE PROYECTOS"
    parrafo=" Nuestro departamento de ingeniería realiza el cálculo estructural de cada proyecto, planifica y coordina a todo el personal que participa de la obra" 
  />
  <ArtService 
    icono={<FontAwesomeIcon icon={faCity} />}
    titulo="DIRECCIÓN DE OBRA"
    parrafo="Los arquitectos son los encargados de dirigir cada obra y de asesorar a nuestros clientes en la elección de las terminaciones de acuerdo al gusto específico y la personalidad de cada uno. Todo hogar es único y debe responder a las necesidades y preferencias de las personas que lo habitan." 
  />
  <ArtService 
    icono={<FontAwesomeIcon icon={faHandshake} />}
     titulo="GESTIONES Y TRÁMITES"
    parrafo="En MFconstrucciones resolvemos todo lo relacionado con trámites, tanto para aprobaciones de un proyecto en determinado barrio o municipio como para el pedido de servicios ante las empresas Edesur y Metrogas. Contamos con un equipo de técnicos matriculados especialistas en gestiones de este tipo." 
  />
  <ArtService   
     icono={<FontAwesomeIcon icon={faHouseCircleCheck} />}
    titulo="COSTO CONTROLADO"
     parrafo="Nuestro sistema de costos es medible y sin variaciones, esto nos permite construir hogares en tiempos precisos y valores fijos con altos estándares de calidad y resultados de excelencia" 
     leerMas={ <BtnLeerMas/>} 
  />
  </div>
      <Footer/>
     </React.Fragment>
    )
}
 export default Servicios