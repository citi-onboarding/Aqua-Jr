import React from "react";

import "./Service.css";

function Service(props) {
  return (
    <div className="Service">
      <div className="img-container">
        <img src={props.img} alt={"Imagem que representa " + props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Service;
