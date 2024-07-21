import React from "react"
import Portada from "./Portada"
import Articulo from "./Articulo"
import Footer from "./Footer"
import MenuNav from "./MenuNav"

const Home = () => {
    return (
    <React.Fragment>
         <MenuNav 
         classLiHome="menu-seleccionado"
         classLinkHome="texto-menu-selecionado"
         />
      <Portada top="70px" 
      stylePortada= "container-portada"
      styleInfo="container-info-portada"
      info="ARQUITECTURA +  CONSTRUCCIÓN"   
       />
       
       <Articulo
       titulo="MF Construcciones" 
       parrafo1="  Somos una empresa Constructora con más de 10 años de experiencia en el corredor verde Ezeiza-San Vicente. Nos dedicamos al diseño, planeamiento y ejecución de proyectos arquitectónicos funcionales, de calidad y con el sello distintivo de cumplir con los plazos de obra establecidos."
       parrafo2="Trabajamos en el proceso completo de diseño y construcción de tu hogar para que puedas disfrutarlo sin preocuparte por nada hasta el día de la mudanza a tu nueva vida." 
       parrafo3="Construimos tu hogar en un entorno natural, en Canning, a través de un proceso sencillo, con tiempos precisos y valores fijos." 
       parrafo4="La ilusión que ponés en el proceso de construir tu casa está fuertemente ligada a la planificación de cómo va a ser tu vida durante los meses que pasen hasta mudarte a ese lugar que imaginaste, y esa planificación involucra inevitablemente tiempos… tiempos que te vayan a acompañar, tiempos planificados, organizados en un cronograma y sobre todo tiempos que se cumplan." 
       parrafo5="Este aspecto cobra vital importancia cuando de construir tu casa se trata, porque tu casa implica tu forma de vida, tus espacios, tus rutinas… y hacer esta transición entre donde estás hoy y donde soñaste estar, debe ser planificada y disfrutable." 
       parrafo6="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione earum temporibus quae non iure autem officiis optio, cupiditate minima. Officiis excepturi quos explicabo id iste illum ut eos quaerat nostrum." />
       
      <Footer/>

    </React.Fragment>
    )
   
}
export default Home