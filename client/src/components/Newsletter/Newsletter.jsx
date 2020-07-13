import React from "react";

import './Newsletter.css';

function Newsletter() {

    return (
    <div className= "Body-Newsletter">

        <div className= "Text-Newsletter">
            <h1>
                Inscreva-se na nossa Newsletter!
            </h1>
            <p>
            Por ela você irá receber conteúdo exclusivo de possibilidade de receber descontos em nossos serviços!
            </p>
        </div>


        <form className= "Form-Newsletter">

            <label>Email</label>
            <input type="Email"/>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Newsletter;