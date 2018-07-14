import React from 'react'
import { Link } from '@reach/router'
import './css/Footer.css'
import LogoRuschBlanc from './img/logo-rusch-blanc.png'
import fb from './img/fb.png'
import linkedIn from './img/linkedin.png'
import instagram from './img/instagram.png'

const Footer = () =>
  <div className="Footer">
  	<Link to='/homepage'>
      <img src={LogoRuschBlanc} className='LogoRuschBlanc' alt='logo-rusch' />
    </Link>
  	<div className='FooterText'>Atelier Rusch © 2018</div>
  	<div className='SocialNetworks'>
      <a href='https://www.facebook.com/collectifrusch/' target='_blank' rel='noopener noreferrer'><img src={fb} alt='icon-fb' /></a>
      <a href='https://www.linkedin.com/company/atelierrusch/' target='_blank' rel='noopener noreferrer'><img src={linkedIn} alt='icon-linkedin' /></a>
  		<a href='https://www.instagram.com/atelier_rusch/' target='_blank' rel='noopener noreferrer'><img src={instagram} alt='icon-instagram' /></a>
  	</div>
  	<Link to='/contact'><div className='FooterText'>Contact</div></Link>
  	<div className='FooterText'>Mentions légales</div>
  </div>

export default Footer
