import mf from "../img/mf.jpg"
import menu from "../img/menu.svg"
import React, { useRef, useState } from "react"
import "./estilos.css"
import { Link, Outlet } from "react-router-dom"

const MenuNav = (props) => {
    const navImputRef = useRef(null)
    const manejarLink = () => 
        { if (navImputRef.current) {
            navImputRef.current.checked = false
        }
    }
    return (
        <React.Fragment> 
<div className="nav">
            <header className="header">
    <div className="header-content">
            <div className="logo">
              <h1> <img src={mf} alt="logo" /> <b>MF-Construcciones</b></h1>
            </div>
            <label for="btn-menu" className="nav-label">
              <img src={menu} alt="boton_menu"/>
            </label>
            <input className="nav-input" type="checkbox"  id="btn-menu" ref={navImputRef} />
        <div className="menu">
            <nav className="nav">
                <ul>
                    <li className={props.classLiHome}><Link className={props.classLinkHome} to="/" onClick={manejarLink}>HOME</Link></li>
                    <li className={props.classLiProyect}><Link className={props.classLinkproyect} to="/proyectos" onClick={manejarLink}>PROYECTOS</Link></li>
                    <li className={props.classLiService}><Link className={props.classLinService} to="/servicios" onClick={manejarLink}>SERVICIOS</Link></li>
                    <li className={props.classLiContact}><Link className={props.classLinkContact} to="/contacto" onClick={manejarLink}>CONTACTO</Link></li>
                </ul>
            </nav>
        </div>   
    </div>
            </header>
    <Outlet />
</div>
        </React.Fragment>
        )
}
export default MenuNav
