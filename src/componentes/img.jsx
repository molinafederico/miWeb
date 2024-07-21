import React from 'react'

const Img = (props) => {
  return (
    <React.Fragment>
          <div className="galeria-item">
    <img id={props.id} src={props.img} alt={props.alt} className="galeria-img"/>
  <h2 className="titulo-img">{props.titulo}</h2>
  </div>
    </React.Fragment>
  )
}

export default Img


