import MenuNav from "./MenuNav"
import Portada from "./Portada"
import Footer from "./Footer"
import ImgGallery from "./ImgGallery"
const Proyectos = () => {

    return (
        <frameElement>
             <MenuNav 
         classLiProyect="menu-seleccionado"
         classLinkProyect="texto-menu-selecionado"
         />
      <Portada top="70px" 
      stylePortada="container-portada-contacto"
      styleInfo="container-info-portada-contacto"
      info="PROYECTOS"
      info2="MFconstrucciones"
       />
     <ImgGallery/>
       
      <Footer/>

    </frameElement>
    )
}
 export default Proyectos