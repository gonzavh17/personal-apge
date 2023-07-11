import React from 'react'
import '../assets/Css/AboutMe.css'
import Imagenes from '../Imagenes'

function AboutMe() {
  return (
    <div className='about-me'>
        <div className="about-me-parent">
            <div className="about-me-div1"><img src={Imagenes.ferrari } alt="" className='about-me-img'/></div>
            <div className="about-me-div2">
                <p className='about-me-title'>About Me</p>
            </div>
            <div className="about-me-div3">
                <p className='about-me-description'>Hola! Mi nombre es Gonzalo Andres Asis, soy de Argentina, provincia de Buenos Aires y tengo 19 años.  Soy un react front-end developer, estudiando back-end para ser fullstack.  Ademas de mi pasion por la programacion, y computacion en general desde muy chico, siempre tuvo un gusto especial por los autos y la fotografia, por eso queria darle mi toque especial a mi portfolio, con algunas de mis pasiones mas alla del desarrollo web.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe