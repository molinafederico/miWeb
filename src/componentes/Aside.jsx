import React from "react";
import "./estilos.css"

const Aside = (props) => {
    return(
        <React.Fragment>
            <aside>
            <a href={props.web} target="_blank" rel="noreferrer" >  <img  src={props.img}  alt={props.alt}/></a>
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}</p>
        </aside> 
        </React.Fragment>
    )
}
export default Aside


