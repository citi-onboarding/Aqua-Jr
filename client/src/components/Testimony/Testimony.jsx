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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    
<div className="Body">
      <div className="Head">
        <h1>Depoimentos</h1>
        <p>Nos conheça por nossos parceiros</p>
      </div>

      <Slider className= 'Slider' {...settings}>
      {Testimonys?.map(({ _id, text, image, name, occupation }) => (
        <div key={_id} className="Card-body">
          <img src={image?.url} alt="Imagem de Exemplo"/>

          <div className="texts">
          <div className="Testimony">
            <p>{text}</p>
          </div>

          <div className="name">
            <p>{name}</p>
            <p>{occupation}</p>
          </div>

          </div>

        </div>
      ))}
      </Slider>
    </div>
  );
}

export default Testimony;




