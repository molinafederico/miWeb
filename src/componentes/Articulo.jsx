import React from "react";
import "./estilos.css"
import lomaNegra from "../img/loma_negra.png"
import ferrum from "../img/ferrum.jpg"
import Aside from "./Aside";
import img_articulo from "../img/07.jpg"

const Articulo = (props) => {

    return (
        <React.Fragment>
            <div class="container-articulo">
        <article>
            <h2>{props.titulo}</h2>
            <p>
              {props.parrafo1}
            </p>
            <p>{props.parrafo2}</p>
            <p>{props.parrafo3}</p>
            <img src={img_articulo} alt="pryecto-1"/>
            <p>{props.parrafo4}</p>
            <p>{props.parrafo5}</p>
            <p>{props.parrafo6}</p>
        </article>
        <div class="container-aside">
        <Aside 
        web="https://www.lomanegra.com/"
        alt="loma_negra"
        titulo="titulo del aside"
        img={lomaNegra}
        parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque nisi modi repudiandae architecto, ut facilis mollitia dicta quae soluta officiis dolore nostrum excepturi quibusdam quasi ratione quos harum sapiente!<"/>
        <Aside 
        web="https://ferrum.com/"
        alt="ferrum"
        titulo="Aside de ferrum"
        img={ferrum}
        parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque nisi modi repudiandae architecto, ut facilis mollitia dicta quae soluta officiis dolore nostrum excepturi quibusdam quasi ratione quos harum sapiente!"/>
        <Aside 
        web="https://www.lomanegra.com/"
        alt="loma_negra"
        titulo="titulo del aside"
        img={lomaNegra}
        parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque nisi modi repudiandae architecto, ut facilis mollitia dicta quae soluta officiis dolore nostrum excepturi quibusdam quasi ratione quos harum sapiente!<"/>
        </div>
    </div>
        </React.Fragment>
    )
}
export default Articulo