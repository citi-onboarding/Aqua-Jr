import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Newsletter.css";
let value = "";
function Newsletter() {
  const [newsletterEmail, setnewsletterEmail] = useState("");

  const Submit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("https://aqua-jr.herokuapp.com/api/newsletter", {
        email: newsletterEmail,
      });
      setnewsletterEmail("");
      document.querySelector(".Body-Newsletter input").value = "";
      document.querySelector(".Body-Newsletter button").innerHTML = "Obrigado!";
      document.querySelector(".Body-Newsletter button").disabled = true;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gradient">
      <div className="Body-Newsletter">
        <div className="Text-Newsletter">
          <h3>Inscreva-se já na nossa newsletter!</h3>
          <p>
            Por ela você irá receber conteúdo exclusivo e terá a possibilidade
            de receber descontos em nossos serviços!
          </p>
        </div>
        <form
          className="Form-Newsletter"
          method="post"
          action="https://aqua-jr.herokuapp.com/Newsletter"
          onSubmit={Submit}
        >
          <input
            name="email"
            type="email"
            onChange={(e) => setnewsletterEmail(e.target.value)}
            placeholder="E-mail"
            value={newsletterEmail}
          />

          <button name="Inscrever-se" type="submit">
            {" "}
            <p>Inscrever-se</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
