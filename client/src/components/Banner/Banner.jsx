import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Banner.css'
import photo from './photo-banner.png'

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
        <div className= "Body-Banner" id="banner">
            {Banner?.map(({ title, text, image}) => (
                <div className="Banner-content">
                    <div className= "Banner-texts-button">
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <button>Entre em contato conosco</button>
                    </div>
                
                    <div className= "Banner-image">
                        <img src={photo} alt=""/>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default Banner;
