import { useState } from "react";

const BtnLeerMas = () => {
    
    const [show, setShow] = useState(false)
    function handelShow(){
        setShow(!show)
    }
    return (
        <div>
            <button onClick={handelShow}>{show === true ? "...leer menos" : "leer mas..."}</button>
            {show === true && <p>hola soy el texto que aparece cuando precionas el boton leer mas...</p>}
        </div>
    )
}
export default BtnLeerMas