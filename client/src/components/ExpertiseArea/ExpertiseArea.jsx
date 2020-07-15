import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Service from "../Service";

import "./ExpertiseArea.css";

// this let is created outside the function cause I don't want it to be rewritten every time the component is rendered
let db = [];

// Creating the components for the next and previous arrow
function NextArrow(props) {
  return <div className={props.className} onClick={props.onClick} />;
}

function PrevArrow(props) {
  return <div className={props.className} onClick={props.onClick} />;
}

// settings for the react-slick
const settings = {
  dots: true,
  infinite: false,
  initialSlide: 0,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "20%",
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  appendDots: (dots) => (
    <div>
      <PrevArrow
        className="slick-prev"
        onClick={() => {
          // when you lick in the arrow from the mobile version, it will simulate a click on the arrow from the web version
          document.querySelector(".ExpertiseArea .slick-prev.slick-arrow").click();
        }}
      />
      <ul className="dot-container"> {dots} </ul>
      <NextArrow
        className="slick-next"
        onClick={() => {
          // when you lick in the arrow from the mobile version, it will simulate a click on the arrow from the web version
          document.querySelector(".ExpertiseArea .slick-next.slick-arrow").click();
        }}
      />
    </div>
  ),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: false,
        centerPadding: "0",
      },
    },
  ],
};

// the function that will return this component
function ExpertiseArea() {
  const [categories, setCategories] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  const loadDb = async () => {
    // get the data from the db
    const res = await axios.get("http://localhost:3001/api/areas");
    db = res.data;
    // if the db has at least one item...
    if (db) {
      // set the selected category as the first one
      setSelected(res.data[0].Category);

      // create an empty array and set it as an array with all the categories names without repeating them
      const categoriesAux = [];
      db.forEach((item) => {
        if (!categoriesAux.includes(item.Category)) {
          categoriesAux.push(item.Category);
        }
      });
      setCategories(categoriesAux);
    }
  };

  //call loadDb when the page is loaded
  React.useEffect(() => {
    loadDb();
  }, []);

  const handleButtonClick = (e) => {
    //set selected as the text within the button clicked
    setSelected(e.target.innerText);
  };

  // when selected changes...
  React.useEffect(() => {
    //create an aux array and set it as an array with all the items from the db that have the selected category
    const aux = db.filter((item) => {
      return item.Category === selected;
    });
    setServices(aux);
  }, [selected]);

  return (
    <section className="ExpertiseArea">
      <h2>Áreas de atuação</h2>
      <div className="categories">
        {categories.map((item, index) => {
          // It will add the selected class if the category is the selected
          return item === selected ? (
            <button
              key={index}
              onClick={handleButtonClick}
              className="selected"
            >
              {item}
            </button>
          ) : (
            <button key={index} onClick={handleButtonClick}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="services">
        <Slider {...settings} className="Slider">
          {services.map((item, index) => {
            return (
              <Service
                key={index}
                img={item.image.url}
                title={item.Title}
                text={item.Text}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default ExpertiseArea;
