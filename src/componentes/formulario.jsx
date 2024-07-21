import React from 'react'

export default function Formulario() {
  return (
    <div className="container-form"> 

        <h2>Contactanos:</h2>
        <form action="https://formspree.io/f/xyyrodov" method="post">    
        <input type="text" name="nombre" id="nombre" className="form-input" placeholder="Apellido y Nombre" autocomplete="off"/>
        <input type="email" name="email" id="email" className="form-input" placeholder="Email@" autocomplete="off" />
        <input type="text" name="asunto" id="asunto" className="form-input" placeholder="Asunto" autocomplete="off"/>
        <textarea name="mensaje" id="mensaje" placeholder="Tu mensaje (opcional)" cols="23" rows="3" className="form-input" autocomplete="off"></textarea>
        <input type="submit" className="enviar form-input"/>
        </form>
        </div>
        )
}
