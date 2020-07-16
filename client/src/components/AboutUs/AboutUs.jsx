import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import './linha.svg';

/*function AboutUs(
) {
    const [AboutUsElements, setAboutUsElements] = useState([]);
  
    const loadAboutUsElements = async () => {
      const res = await axios.get('http://localhost:3001/api/aboutus');
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
        const res = await axios.get('http://localhost:3001/api/aboutus');
        setAboutUsElements(res.data);
    };

    useEffect(() => {
        loadAboutUsElements();
    }, []);

    const [ValuesElements, setValuesElements] = useState([]);
    const loadValuesElements = async () => {
        const res = await axios.get('http://localhost:3001/api/values');
        setValuesElements(res.data);
    };

    useEffect(() => {
        loadValuesElements();
    }, []);

    return(
        <div className="aboutUsSection">
            { AboutUsElements?.map(({text, image1, image2}) =>(
                <div className="aboutUsInfo">
                    <div className="aboutUsText">
                        <h1>Sobre nós</h1>
                        <p>{text}</p>
                    </div>
                    <div className="aboutUsImages">
                        <img src={image1?.url} alt="Ilustação Sobre Nós" />
                        <img src={image2?.url} alt="Ilustação Sobre Nós" />
                    </div>
                </div>
            ))}
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
    )
}

export default AboutUs;

