import React, { useState } from "react";
import "./nav.css";
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setactiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsBook2Line />
      </a>
    </nav>
  );
};

export default Nav;
