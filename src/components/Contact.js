import React from 'react'
import './css/Contact.css'
import Facebook from './img/fb.png'
import Instagram from './img/instagram.png'
import Linkedin from './img/linkedin.png'

const Contact = () =>
  <div>
    <h2 className="App-intro">
      Contactez l'Atelier !
    </h2>

    <p>
    Adresse :<br/>
    ICIMontreuil <br/>
    135 boulevard Chanzy <br/>
    93100 Montreuil<br/>
    Metro : Robespierre ligne 9 <br/>
      <br/>
    Téléphone :<br/>
     -Marie : +33/(0)6 69 17 12 83<br/>
     -Michael : +33/(0)6 83 09 86 16<br/>
      <br/>
    Réseaux sociaux :

      <div>
        <a href= 'https://www.facebook.com/collectifrusch/'> <img src = {Facebook} alt = 'facebook'></img> </a>
        <a href= 'https://www.instagram.com/atelier_rusch/'> <img src = {Instagram} alt = 'instagram'></img> </a>
        <a href= 'https://www.linkedin.com/company/atelierrusch/'> <img src = {Linkedin} alt = 'linkedin'></img> </a>
      </div>
    </p>

    <iframe width = 'auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9584248426695!2d2.4236420157030865!3d48.85900317928745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d637a1305c1%3A0x90a47eaa3ee8cf50!2sICImontreuil!5e0!3m2!1sfr!2sfr!4v1530026135912" width="600" height="450" frameborder="0" allowfullscreen></iframe>
  </div>

export default Contact
