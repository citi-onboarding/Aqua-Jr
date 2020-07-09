import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Testimony.css';

function Testimony() {
  const [Testimonys, setTestimonys] = useState([]);

  const loadTestimonys = async () => {
    const res = await axios.get('http://localhost:3001/api/testimony');
    setTestimonys(res.data);
  };

  useEffect(() => {
    loadTestimonys();
  }, []);


  let settings = {
    infinite: true, 
    speed: 500,
    arrows: true,
    slideToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: "400px",

  }

  return (
    
<div className="Body">
      <div className="Head">
        <h1>Depoimentos</h1>
        <p>Nos conheça por nossos parceiros</p>
      </div>
      <Slider {...settings}>
      {Testimonys?.map(({ _id, text, image, name }) => (
        <div key={_id} className="Card-body">
          <img src={image?.url} alt="Imagem de Exemplo"/>
          <p>{text}</p>
          
          <div className="name">
            <p>{name}</p>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default Testimony;




