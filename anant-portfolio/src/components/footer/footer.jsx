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
        <a href=""></a>
      </div>

    </footer>
  )
}

export default footer;