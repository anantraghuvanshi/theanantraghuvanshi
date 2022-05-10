import React from 'react'
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaTelegramPlane} from 'react-icons/fa';

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>anantsinghraghuvanshi1@gmail.com</h5>
            <a href="mailto:anantsinghraghuvanshi1@gmail.com">Drop a Mail</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane />
            <h4>Telegram</h4>
            <h5>Anant Singh Raghuvanshi</h5>
            <a href="mailto:anantsinghraghuvanshi1@gmail.com">Say Hi on Telegram</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default contact