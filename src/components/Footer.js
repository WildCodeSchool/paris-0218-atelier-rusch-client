import React from 'react'
import './css/Footer.css'
import LogoRuschBlanc from './img/logo-rusch-blanc.png'
import fb from './img/fb.png'
import linkedIn from './img/linkedin.png'
import instagram from './img/instagram.png'

const Footer = () =>
  <div className="Footer">
  	<img src={LogoRuschBlanc} className='LogoRuschBlanc' />
  	<div className='FooterText'>Atelier Rusch © 2018</div>
  	<div className='SocialNetworks'>
      <a href='https://www.facebook.com/collectifrusch/' target='_blank'><img src={fb} /></a>
      <a href='https://www.linkedin.com/company/atelierrusch/' target='_blank'><img src={linkedIn} /></a>
  		<a href='https://www.instagram.com/atelier_rusch/' target='_blank'><img src={instagram} /></a>
  	</div>
  	<div className='FooterText'>Contact</div>
  	<div className='FooterText'>Mentions légales</div>
  </div>

export default Footer
