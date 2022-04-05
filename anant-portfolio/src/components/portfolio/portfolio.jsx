import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me.png";
import IMG2 from "../../assets/me.png";
import IMG3 from "../../assets/me.png";
import IMG4 from "../../assets/me.png";
import IMG5 from "../../assets/me.png";
import IMG6 from "../../assets/me.png";

const data =[
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }
  {
    id:1,
    image: IMG1,
    title: 'Chat App using React and Socket',
    github: 'https://github.com/anantraghuvanshi/chat-app-using-react-socketIO',
    demo: 'https://chat-infinity.netlify.app/'
  }

]
  


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Anant's Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" width="480" height="360" />
          </div>
          <h3>Chat App using React and Socket</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/anantraghuvanshi/chat-app-using-react-socketIO"
              className="btn third about-btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chat-infinity.netlify.app/"
              className="btn third about-btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
