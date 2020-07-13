import React, { useState, useEffect } from "react";

import './Newsletter.css';
let value = ''

function Newsletter() {

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


        <form className= "Form-Newsletter" >

            <input name="Email" value={value} onChangeCapture={handleChange} placeholder = "E-mail"/>

            <button type= "submit" >Inscreva-se</button>
        </form>
    </div>
    )
}

export default Newsletter;