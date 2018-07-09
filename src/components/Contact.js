import React from 'react'
import Nav from './Nav.js'
import Facebook from './img/fb.png'
import Instagram from './img/instagram.png'
import Linkedin from './img/linkedin.png'
import './css/Contact.css'

const Contact = () =>
  <div>
    <Nav />
    <div className="spacer"></div>
    <div className='Contact'>
      <h2 className="green">
        Contactez l'Atelier !
      </h2>

      <div className="address currentText">
        <div>
          <h4>Adresse</h4>
          ICIMontreuil <br/>
          135 boulevard Chanzy <br/>
          93100 Montreuil<br/>
          Metro : Robespierre ligne 9 <br/>
        </div>
        <div>
          <h4>Contacts</h4>
          Marie : +33 6 69 17 12 83<br/>
          Michael : +33 6 83 09 86 16<br/>
          <div className='reseaux'>
            <a href= 'https://www.facebook.com/collectifrusch/'> <img src = {Facebook} alt = 'facebook'></img> </a>
            <a href= 'https://www.instagram.com/atelier_rusch/'> <img src = {Instagram} alt = 'instagram'></img> </a>
            <a href= 'https://www.linkedin.com/company/atelierrusch/'> <img src = {Linkedin} alt = 'linkedin'></img> </a>
          </div>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9584248426695!2d2.4236420157030865!3d48.85900317928745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d637a1305c1:0x90a47eaa3ee8cf50!2sICImontreuil!5e0!3m2!1sfr!2sfr!4v1530026135912" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
    </div>
  </div>

export default Contact
