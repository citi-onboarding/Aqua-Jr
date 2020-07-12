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

  function NextArrow(props) {
    return <div className={props.className} onClick={props.onClick} />;
  }
  
  function PrevArrow(props) {
    return <div className={props.className} onClick={props.onClick} />;
  }


  let settings = {
    infinite: true, 
    focusOnSelect: true,
    speed: 500,
    initialSlide: 0,
    centerPadding: "30%",
    arrows: true,
    slideToShow: 3,
    slideToScroll: 1,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
          centerMode: false
        }

      },
    ],
    appendDots: dots => (

      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vw",
        }}
      >
      <PrevArrow className="slick-prev" onClick={()=>{
        document.querySelector(".slick-prev.slick-arrow").click();
      }}/>
        <ul style={{ margin: "0px" }}> {dots} </ul>

        <NextArrow className="slick-next" onClick={()=>{
        document.querySelector(".slick-next.slick-arrow").click();
      }}/>
      
      </div>
    ),

  };
  if(document.querySelector(".slick-prev.slick-arrow")){
    document.querySelector(".slick-prev.slick-arrow").click();
  }
  return (
        <div className="background">  
            <div className="Body-Testimony">
                <div className="Head-Testimony">
                    <h1>Depoimentos</h1>
                    <p>Nos conheça por nossos parceiros</p>
                </div>

                <Slider className= 'Slide-Testimony' {...settings}>
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




