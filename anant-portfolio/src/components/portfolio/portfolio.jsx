import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me.png";
import IMG2 from "../../assets/me.png";
import IMG3 from "../../assets/me.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Anant's Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Chat App using React and Socket</h3>
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
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>ToDo List using Express</h3>
          <a
            href="https://github.com/anantraghuvanshi/todo-list-final"
            className="btn third about-btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://anant-todo-list.herokuapp.com/"
            className="btn third about-btn"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Weather App</h3>
          <a
            href="https://github.com/anantraghuvanshi/live-weather-forecast"
            className="btn third about-btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            className="btn third about-btn"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
