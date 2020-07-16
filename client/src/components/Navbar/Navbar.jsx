import React from "react";

function Navbar(){
    return(
        <nav className="Navbar">
            <img src="./logo.png" alt="Aqua jr logo"/>
            <div className="links">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <button>Blog</button>
            <div className="sandwich"></div>
        </nav>
    );
}

export default Navbar;