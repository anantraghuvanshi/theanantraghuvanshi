import React from 'react'
import './testimonials.css';
import img1 from '../../assets/me.png';

import {  Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data= [
{
avatar: img1,
name: "Tina Saow",
review: 'Mudi alias animi dolurem aliquam ea eum bealae maiures, conseclelur praesentiun quibusdam, commodi velit porru deserunt explicabo nostrum ducimus quasi?'
},
{
avatar: img1,
name: 'Shatta Wale',
review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditlis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores descrunt explicabo nostrum ducimus quasi?'
},
{
avatar: img1,
name: 'Kwame Despite',
review: 'Modi alias animi dolorcm aliquam ca cum pcatac maiorcs, consectetur pracsentium quibusdam, commodi velit porro o blanditiis conscquatur qui molestiac. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
}

];

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from Collegues
      </h5>
      <h2>
        Testimonials
      </h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {img1} />
          </div>
          <h5 className="client__review">{name}</h5>
            <small className="collegue__review">{review}           
            </small>
        </SwiperSlide>
            )
           
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials