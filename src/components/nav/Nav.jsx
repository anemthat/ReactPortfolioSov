import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import{BiBook}from 'react-icons/bi'
import{BiMessageRoundedDots}from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const[activeNav, setActivenav] = useState('#')
  return (
   <nav>
<a href="#" onClick={()=>setActivenav('#')}className={activeNav === '#' ? 'active' : ''}>< AiOutlineHome/></a>
<a href="#about" onClick={()=>setActivenav('#about')} className={activeNav === '#about' ? 'active' : ''}>< BiUserCircle/></a>
<a href="#experience" onClick={()=>setActivenav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>< BiBook/></a>
<a href="#contact" onClick={()=>setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>< BiMessageRoundedDots/></a>
   </nav>
  )
}

export default Nav
