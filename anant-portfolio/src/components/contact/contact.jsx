import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaTelegramPlane />
            <h4>Telegram</h4>
            <h5>Anant Singh Raghuvanshi</h5>
            <a href="mailto:anantsinghraghuvanshi1@gmail.com" target="_blank">
              Say Hi on Telegram
            </a>
          </article>
          <article className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>anantsinghraghuvanshi1@gmail.com</h5>
            <a href="https://t.me/sundi0110" target="_blank">
              Drop a Mail
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Type Your Message Here"  rows="7" required></textarea>
          <button type="submit" className="btn third btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
