import React from "react";
import "./CallToBlog.css";
import ondasAzuis from './ilustracao (2).svg';
import onda2 from './onda2 (4).svg';

function CallToBlog() {
  return (
    <section className="CallToBlog">
      <div className= "OndasAzuis">
        <img src={ondasAzuis}/>
      </div>
      <div className="CallToBlog-container">
        <h2>Visite agora nosso blog!</h2>
        <p>
          Aprenda mais sobre lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <button name= "Visitar o blog">Visitar blog</button>
      </div>
      <div className="OndaBottom">
        <img src={onda2}/>
      </div>
    </section>
  );
}

export default CallToBlog;

