import React from "react";
import logo from "./logo.png";

import "./Navbar.css";

function handleClick() {
  document.querySelector(".Navbar .side-menu").classList.toggle("active");
  document.querySelector(".sandwich").classList.toggle("active");
}

function Navbar() {
  return (
    <div className="nav-placeholder">
      <nav className="Navbar">
        <img src={logo} alt="Aqua jr logo" />

        <div className="web-only">
          <div className="links">
            <a href="#banner">Início</a>
            <a href="#ExpertiseArea">Áreas de atuação</a>
            <a href="#about-us">Sobre nós</a>
            <a href="#testimony">Depoimentos</a>
            <a href="#contact">Contato</a>
          </div>
          <a
            className="blog-button"
            href="https://aquajr.wixsite.com/aquajr/blog"
            target="_blank"
          >
            Blog
          </a>
        </div>

        <button className="sandwich" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        <aside className="side-menu">
          <div className="side-menu-container">
            <div className="links">
            <a href="#banner" onClick={handleClick}>Início</a>
            <a href="#ExpertiseArea" onClick={handleClick}>Áreas de atuação</a>
            <a href="#about-us" onClick={handleClick}>Sobre nós</a>
            <a href="#testimony" onClick={handleClick}>Depoimentos</a>
            <a href="#contact" onClick={handleClick}>Contato</a>
            </div>
            <a
              className="blog-button"
              href="https://aquajr.wixsite.com/aquajr/blog"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </aside>
      </nav>
    </div>
  );
}

export default Navbar;
