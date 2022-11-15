import React from 'react'
import './header.css'
import Btn from './Btn'
import me from '../../images/me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   <header>
    <div className="container header__container">
    <h5>Hello welcome I'm</h5>
    <h1>Anelisa Mthathi</h1>
    <h5 className="textlight">Software Engineer graduate</h5>
    <Btn/>
    {/* <HeaderSocials/> */}
    <br />

    <div className='mee'>
      <img src={me} alt='mee'/>
      <a href='#contact' className='scroll__down'> scroll down</a>
    </div>


    </div>

   </header>
  )
}

export default Header
