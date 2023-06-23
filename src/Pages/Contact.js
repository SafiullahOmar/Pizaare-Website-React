import React from 'react'
import pizzaLeft from '../Assets/pizzaLeft.jpg';
import "../Style/Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${pizzaLeft})`}}></div>
      <div className='rightSide'>
      <h1>Contact US</h1>
      <form id="contact-form" method='POST'>
      <label htmlFor='name'>Full Name</label>
      <input name="name" placeholder='Enter full name ..' type='text'></input>
      <label htmlFor='email'>Email</label>
      <input name="email" placeholder='Enter full Email ..' type='email'></input>
      <label htmlFor='email'>Email</label>
      <textarea rows="6" placeholder='Enter full message ..' name='message' required></textarea>
        <button type='submit'>Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
