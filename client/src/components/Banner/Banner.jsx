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
        <div>Test</div>
    )
}
export default Banner;
