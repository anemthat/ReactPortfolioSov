import React from 'react'
import './contact.css'
import {AiOutlineMail}from 'react-icons/ai'

const Contact = () => {
  return (
   <section id='contact'>
   <h5>Get in touch with me</h5>
   <h2>Contact me</h2>
   <br />
   <div className="container contact__container">

    <div className="contact__options">

      <article className="contact__option">
        <AiOutlineMail/>
        <h4>email</h4>
        <h5>anelisamthathi@gmail.com</h5>
        <a href="mailto:anelisamthathi@gmailcom">Send Massage</a>
      </article>

    </div>
    <form action="">
      <input type = "text" name='name' placeholder='Full name' required/>
      <input type="email" name='email' placeholder='email address' required/>
      <textarea name=""  rows="7" placeholder='Your message' required></textarea>
      <button type='submit' className='bttn btn-primary'> Send message</button>
  
    </form>

   </div>
   </section>
  )
}

export default Contact
