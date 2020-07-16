import React from "react";
import logo from "./logo.png"

import "./Navbar.css"

function Navbar(){
    return(
        <nav className="Navbar">
            <img src={logo} alt="Aqua jr logo"/>
            <div className="links">
                <a href="#">Início</a>
                <a href="#">Áreas de atuação</a>
                <a href="#">Sobre nós</a>
                <a href="#">Depoimentos</a>
                <a href="#">Contato</a>
            </div>
            <button className="blog-button">Blog</button>
            <button className="sandwich">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>
    );
}

export default Navbar;