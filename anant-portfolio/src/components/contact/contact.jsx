import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>anantsinghraghuvanshi1@gmail.com</h5>
            <a href="mailto:anantsinghraghuvanshi1@gmail.com">Drop a Mail</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default contact