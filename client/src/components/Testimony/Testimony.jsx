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

  function SamplePrevtArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red"}}
        onClick={onClick}
      />
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
          <button type="button">
          <span className="credits"></span>
          </button>

      </div>
    );
  };
  
  function next() {
    Slider.slider.slickNext();
  }

  let settings = {
    infinite: true, 
    focusOnSelect: true,
    speed: 500,
    centerPadding: "30%",
    arrows: true,
    slideToShow: 3,
    slideToScroll: 1,
    dots: true,
    centerMode: true,
    nextArrow: <SampleNextArrow/>,
    appendDots: dots => (

      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vw",
        }}
      >
      <div>
        <button>Voltar</button>
      </div>
        <ul style={{ margin: "0px" }}> {dots} </ul>

        <div>
        <button onClick= {next()} type="button">
          </button>
        </div>
      </div>
    ),
  };

  return (
        <div className="background">  
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
        </div>  
  );
}

export default Testimony;




