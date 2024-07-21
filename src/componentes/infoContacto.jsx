import React from 'react'


export default function InfoContacto(props) {
  return (
    <div class="container-info">
        <h2 className='h2Info'>{props.titulo}</h2>
        <p className='parrafo_info'>{props.parrafo} </p>
         <br /> <hr />
    </div>
  )
}
