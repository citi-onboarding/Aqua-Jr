import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import './linha.svg';

/*function AboutUs(
) {
    const [AboutUsElements, setAboutUsElements] = useState([]);
  
    const loadAboutUsElements = async () => {
      const res = await axios.get('https://aqua-jr.herokuapp.com/api/aboutus');
      setAboutUsElements(res.data);
    };
  
    useEffect(() => {
      loadAboutUsElements();
    }, []);

    {Testimonys?.map(({ _id, text, image, name, occupation }) => (
}*/

function AboutUs(){
    const [AboutUsElements, setAboutUsElements] = useState([]);
    const loadAboutUsElements = async () => {
        const res = await axios.get('https://aqua-jr.herokuapp.com/api/aboutus');
        setAboutUsElements(res.data);
    };

    useEffect(() => {
        loadAboutUsElements();
    }, []);

    const [ValuesElements, setValuesElements] = useState([]);
    const loadValuesElements = async () => {
        const res = await axios.get('https://aqua-jr.herokuapp.com/api/values');
        setValuesElements(res.data);
    };

    useEffect(() => {
        loadValuesElements();
    }, []);
console.log(AboutUsElements);
    return(
        <div className="aboutUsSection" id="about-us">
                <div className="aboutUsImages">
                    <img className="image2" src={AboutUsElements[0]?.image2.url} alt="Ilustação Sobre Nós" />
                    <img className="image1" src={AboutUsElements[0]?.image1.url} alt="Ilustação Sobre Nós" />
                </div>
                <div className="aboutUsRight">
                    <div className="aboutUsText">
                        <h1>Sobre nós</h1>
                        <p>{AboutUsElements[0]?.text}</p>
                    </div>
                    <div className="values">
                        <div className="valuesTitle">
                            <h2>Nossos valores</h2>
                        </div>
                        <div className="valuesInfoBlock">
                        { ValuesElements?.map(({title, image}) =>(
                            <div className="valuesInfo">
                                <img src={image?.url} alt="Ilustração valores" />
                                <h3>{title}</h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutUs;

