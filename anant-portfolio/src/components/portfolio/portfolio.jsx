import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  },
  {
    id:6,
    image: IMG6,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }

]
  


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Anant's Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key = {id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>Chat App using React and Socket</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn third about-btn"
              target="_blank" rel="noreferrer"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn third about-btn"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;
