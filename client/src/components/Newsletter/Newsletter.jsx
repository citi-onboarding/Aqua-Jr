import React, { useState, useEffect } from "react";

import './Newsletter.css';
let value = 'a'
function Newsletter() {

    const handleChange = (e) => {
        value = e.target.value;
        alert(value)
    }
    return (
    <div className= "Body-Newsletter">

        <div className= "Text-Newsletter">
            <h1>
                Inscreva-se na nossa Newsletter!
            </h1>
            <p>
            Por ela você irá receber conteúdo exclusivo e terá a possibilidade de receber descontos em nossos serviços!
            </p>
        </div>


        <form className= "Form-Newsletter" onSubmit={handleChange} >

            <input name="Email" placeholder = "E-mail"/>

            <button type= "submit" >Inscreva-se</button>
        </form>
    </div>
    )
}

export default Newsletter;