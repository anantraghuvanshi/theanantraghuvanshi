import React from 'react'
import './footer.css';
import { BsStackOverflow} from 'react-icons/bs';
import { FaInstagram} from 'react-icons/fa';
import { AiOutlineMedium} from 'react-icons/ai';

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anant</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://stackoverflow.com/users/17924329/anant-singh-raghuvanshi"><BsStackOverflow/></a>
        <a href="https://www.instagram.com/theanantraghuvanshi/"><FaInstagram/></a>
        <a href="https://medium.com/@anantsinghraghuvanshi1"><AiOutlineMedium/></a>
      </div>

      <div className="footercopyright">
        <small>&copy; Anant Singh Raghuvanshi. All rights reserved</small>
      </div>

    </footer>
  )
}

export default footer;