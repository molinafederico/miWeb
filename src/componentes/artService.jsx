import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHouseUser, faUser } from "@fortawesome/free-solid-svg-icons";
import BtnLeerMas from "./btnLeerMas";

const ArtService = (props) => {
    return (
      <React.Fragment>
          <div className="servicio">
        <div class="logo-servicio">{props.icono}</div>
        <h2>{props.titulo}</h2>
        <p>{props.parrafo}</p>
        <span>{props.leerMas}</span>
     
    </div>
      </React.Fragment>
    )
}
export default ArtService