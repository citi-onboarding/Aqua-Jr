import React from "react";
import logo from "./logo.png";

import "./Navbar.css";

function handleClick() {
  document.querySelector(".Navbar .side-menu").classList.toggle("active");
  document.querySelector(".sandwich").classList.toggle("active");
}

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} alt="Aqua jr logo" />

      <div className="web-only">
        <div className="links">
          <a href="#">Início</a>
          <a href="#">Áreas de atuação</a>
          <a href="#">Sobre nós</a>
          <a href="#">Depoimentos</a>
          <a href="#">Contato</a>
        </div>
        <a
          className="blog-button"
          href="https://aquajr.wixsite.com/aquajr/blog"
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
            <a href="#">Início</a>
            <a href="#">Áreas de atuação</a>
            <a href="#">Sobre nós</a>
            <a href="#">Depoimentos</a>
            <a href="#">Contato</a>
          </div>
          <a
            className="blog-button"
            href="https://aquajr.wixsite.com/aquajr/blog"
          >
            Blog
          </a>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
