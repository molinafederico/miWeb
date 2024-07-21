import React from "react";
import face from "../img/facebook.svg"
import likedin from "../img/linkedin.png"
import instagram from "../img/instagram.svg"

 const Redes = () => {
      return (
        <React.Fragment>
        <div class="redes-footer">
        <a target="_blank" href="https://www.facebook.com/?locale=es_LA"><img src={face} alt="logo_facebook"/></a>
        <a target="_blank" href="https://www.instagram.com/"><img src={instagram} alt="logo_instagram"/></a>
        <a target="_blank" href="https://ar.linkedin.com/"><img src={likedin} alt="logo_linkedin"/></a>
       </div>
       </React.Fragment>
      )
}
 export default Redes