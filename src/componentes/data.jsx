import React from 'react'
import InfoContacto from "./infoContacto";
import DatosContacto from "./datosContacto";
import Formulario from "./formulario";


export default function Data() {
  return (
    <div className="container-contacto">

    <InfoContacto 
    titulo="MF-Construcciones:"
    parrafo="Construimos 
    tu hogar en un entorno natural,
     en Canning,  a través de un proceso sencillo,
      con tiempos precisos y valores fijos." />

     <DatosContacto
     titulo="Datos De Contacto:"
     tel="+54 9112353-7080" 
     email="info@mfconstrucciones.com.ar"
     direccion="Av. Mariano Castex 3489" />

     <Formulario />
   </div>
  )
}

