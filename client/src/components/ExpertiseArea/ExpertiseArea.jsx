import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Service from "../Service";

import img from "./imgTest.png";

import "./ExpertiseArea.css";


let db = [];

function ExpertiseArea() {
	const [categories, setCategories] = React.useState([]);
	const [services, setServices] = React.useState([]);
  const [selected, setSelected] = React.useState('');

  const loadDb = async () => {
		// get the data from the db
		const res = await axios.get("http://localhost:3001/api/areas");
		db = res.data;
		// if the db has at least one item...
    if(db){
			// set the selected category as the first one
			setSelected(res.data[0].Category);

			// create an empty array and set it as an array with all the categories names without repeating them
			const categoriesAux = [];
			db.forEach((item)=>{
				if(!categoriesAux.includes(item.Category)){
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
	
	const handleButtonClick = (e)=>{
		//set selected as the text within the button clicked
    setSelected(e.target.innerText);
  }

	// when selected changes...
  React.useEffect(() => {
		//create an aux array and set it as an array with all the items from the t=db that have the selected category
    const aux = db.filter((item)=>{
			return item.Category === selected;
		});
    setServices(aux);
  }, [selected]);

  return (
    <section className="ExpertiseArea">
      <h2>Áreas de atuação</h2>
      <div className="categories">
        {categories.map((item, index)=>{
          return <button key={index} onClick={handleButtonClick}>{item}</button>;
        })}
      </div>
      <div className="services">
			<Slider dots={true} infinite={true} arrows={true} slidesToShow={1} slidesToScroll={1} centerMode={true} focusOnSelect={true}>
				{services.map((item, index)=>{
					return(
						<Service key={index} img={img} title={item.Title} text={item.Text}/>
					);
				})}
			</Slider>
      </div>
      <div className="dots"></div>
    </section>
  );
}

export default ExpertiseArea;

