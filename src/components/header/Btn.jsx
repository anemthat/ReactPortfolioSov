import React from 'react'
import cv from '../../images/cv.pdf'



function Btn() {
  return (
    <div className='bttn'>
    <a href={cv} download className='bttn dwnld'>Download Cv</a>
    <a href='#contact' className='bttn btn-primary'>Chat</a>
</div>
  )
}

export default Btn


