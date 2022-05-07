import React from 'react'
import './testimonials.css';
import img1 from '../../assets/me.png';

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from Collegues
      </h5>
      <h2>
        Testimonials
      </h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default testimonials