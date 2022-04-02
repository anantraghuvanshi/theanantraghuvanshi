import React from 'react'
import './header.css';
import CTA from './CTA';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, People know me as</h5>
        <h1>Anant Singh Raghuvanshi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default header