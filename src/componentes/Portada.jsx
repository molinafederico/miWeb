import React from "react";
import "./estilos.css"

const Portada = (props) => {
    return(
        <React.Fragment>
              
                <div style={{marginTop:props.top}} className={props.stylePortada}>
        <div className={props.styleInfo}>   
            <h2>{props.info}{props.animacion}<br/><b>{props.info2}</b></h2>        
        </div>
    </div>
        </React.Fragment>
    )
}
export default Portada