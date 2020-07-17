import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Banner.css'

function Banner() {
    const [Banner, setBanner] = useState([]);
  
    const loadBanner = async () => {
      const res = await axios.get('http://localhost:3001/api/banners');
      setBanner(res.data);
    };
  
    useEffect(() => {
      loadBanner();
    }, []);

    return (
        <div className= "Body-Banner">
            {Banner?.map(({ title, text, image}) => (
                <div className="Banner-content">
                    <div className= "Banner-texts-button">
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <button>Entre em contato conosco</button>
                    </div>
                
                    <div className= "Banner-image">
                        <img src={image?.url} alt=""/>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default Banner;
