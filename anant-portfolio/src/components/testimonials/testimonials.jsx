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
            <img src= {img1} alt="Avatar One" />
          </div>
          <h5 className="client__review">Vipul Tripathi</h5>
            <small className="collegue__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi obcaecati 
              commodi temporibus deserunt at eaque atque excepturi error eveniet soluta, facere, quia
               sint amet dolorem voluptates enim placeat dolores?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src= {img1} alt="Avatar One" />
          </div>
          <h5 className="client__review">Vipul Tripathi</h5>
            <small className="collegue__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi obcaecati 
              commodi temporibus deserunt at eaque atque excepturi error eveniet soluta, facere, quia
               sint amet dolorem voluptates enim placeat dolores?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src= {img1} alt="Avatar One" />
          </div>
          <h5 className="client__review">Vipul Tripathi</h5>
            <small className="collegue__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi obcaecati 
              commodi temporibus deserunt at eaque atque excepturi error eveniet soluta, facere, quia
               sint amet dolorem voluptates enim placeat dolores?
            </small>
        </article>
      </div>
    </section>
  )
}

export default testimonials