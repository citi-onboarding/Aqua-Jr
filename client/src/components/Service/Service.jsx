import React from "react";

import "./Service.css";

function Service(props) {
  return (
    <div className="Service">
      <img src={props.img} alt={"Imagem que representa " + props.title} />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Service;
