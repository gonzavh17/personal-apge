import React from 'react'
import Imagenes from '../Imagenes'
import '../assets/Css/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-parent'>
            <div className="contact-div1">
                <p className='contact-title'>Get in touch</p>
            </div>
            <div className="contact-div2">

            </div>
            <div className="contact-div3"><img src={Imagenes.porsche6} alt="" className='contact-img'/></div>
            <div className="contact-div4"><img src={Imagenes.porsche2} alt="" className='contact-img2'/></div>
        </div>
    </div>
  )
}

export default Contact