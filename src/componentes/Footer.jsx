import React from "react";
import { Copy } from "./copy";
import Redes from "./Redes";
import './estilos.css'



const Footer = () => {

    return (
        <frameElement>
        <div class="container-footer">
        <footer>
          <Copy/>
          <Redes/>
        </footer>
    </div>
    </frameElement>
    )
}
 export default Footer