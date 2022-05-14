import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfh1tet', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anantsinghraghuvanshi1@gmail.com</h5>
            <a href="mailto:anantsinghraghuvanshi1@gmail.com" target="_blank">
            Drop a Mail
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane classmae= 'contact__option-icon' />
            <h4>Telegram</h4>
            <h5> Anant Singh Raghuvanshi</h5>
            <a href="https://t.me/sundi0110" target="_blank">
            Say Hi on Telegram
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Type Your Message Here"  rows="7" required></textarea>
          <button type="submit" className="btn third about-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
