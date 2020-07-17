import React, { useState, useEffect } from "react";

import './Newsletter.css';
let value = ''
function Newsletter() {
    const [newsletterEmail, setnewsletterEmail] = useState({
        email: '',
    })
    const Submit = (e) => {
        alert(newsletterEmail.email)
    }
    return (
    <div className="gradient">
           
    <div className= "Body-Newsletter">

        <div className= "Text-Newsletter">
            <h3>
            Inscreva-se já na nossa newsletter!
            </h3>
            <p>
            Por ela você irá receber conteúdo exclusivo e terá a possibilidade de receber descontos em nossos serviços!
            </p>
        </div>
        <form className= "Form-Newsletter" method="post" action="http://localhost:3001/Newsletter">

            <input name="Email" type= 'email' onChange={(e) => setnewsletterEmail({...newsletterEmail, email: e.target.value})}  placeholder = "E-mail"/>

            <button type="submit"> <p>Inscrever-se</p></button>
        </form>
    </div>
    </div>
    )
}

export default Newsletter;