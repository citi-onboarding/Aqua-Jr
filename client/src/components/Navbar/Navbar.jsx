import React from "react";

function Navbar(){
    return(
        <nav className="Navbar">
            <img src="./logo.png" alt="Aqua jr logo"/>
            <div className="links">
                <a href="#">Início</a>
                <a href="#">Áreas de atuação</a>
                <a href="#">Sobre nós</a>
                <a href="#">Depoimentos</a>
                <a href="#">Contato</a>
            </div>
            <button>Blog</button>
            <div className="sandwich"></div>
        </nav>
    );
}

export default Navbar;