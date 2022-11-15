import React from 'react'
import './footer.css'
import{AiFillFacebook} from 'react-icons/ai'
import{BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { useState } from 'react'
import About from '../about/About'
import {BsLinkedin} from 'react-icons/bs'


function Footer() {
  const[activeFot, setActivefot] = useState('#')
  return (
    <footer>
      <a href='#' className='footer__logo'>SYNI</a>

<ul className='permalinks'>
  <li><a href='#' onClick={()=>setActivefot('#')}className={activeFot === '#' ? 'active' : ''}>Home</a></li>
  <li><a href='#about' onClick={()=>setActivefot('#about')}className={activeFot === '#about' ? 'active' : ''}>About</a></li>
  <li><a href='#experience'onClick={()=>setActivefot('#experience')}className={activeFot === '#experience' ? 'active' : ''} >Experience</a></li>
  <li><a href='#contact' onClick={()=>setActivefot('#contact')}className={activeFot === '#contact' ? 'active' : ''}>Contact</a></li>
</ul>
<div className="footer__socials">

  <a href='https://facebook.com'><AiFillFacebook/></a>
  <a href='https://instagram.com'><BsInstagram/></a>
  <a href='https://twitter.com'><BsTwitter/></a>
  <a href='https://www.linkedin.com/in/anelisa-mthathi-781b40159/' target="_blank"> <BsLinkedin/></a>

</div>
      
    </footer>
  )
}

export default Footer
