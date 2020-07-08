import React from "react";
import axios from "axios";

import "./ExpertiseArea.css";

function ExpertiseArea() {
  return (
    <section className="ExpertiseArea">
      <h2>Áreas de atuação</h2>
      <div className="categories"></div>
      <div className="services"></div>
      <div className="dots"></div>
    </section>
  );
}

export default ExpertiseArea;
