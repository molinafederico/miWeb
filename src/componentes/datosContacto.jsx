import React from 'react'

export default function DatosContacto(props) {
  return (
    <div className="container-info-contacto">
    <h2>{props.titulo} </h2>
    <div className='parrafo_info' >
    <p>
        <b>Telélefono: </b>{props.tel}
    </p>
    <p>
        <b>Email: </b>{props.email}
    </p>
    <p>
        <b>Dirección: </b>{props.direccion} <br /><br /> <hr />
    </p> 
    </div>
    <br /> <br />
  
</div>
  )
}
