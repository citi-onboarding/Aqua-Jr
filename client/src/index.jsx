import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

import {
  CallToBlog,
  ExpertiseArea, 
  Footer,
  PostToBlog,
  Newsletter,
  Testimony,
} from './components';

function App() {
  const [footerInfo, setFooterInfo] = useState([]);
  const LoadFooter = async() => {
      const answer = await axios.get('http://localhost:3001/api/footers');
      setFooterInfo(answer.data);
    };
    
    useEffect(() => {
        LoadFooter();
    },[]);
  
  return (
    <section className="app">
      <div className="PostToBlog">
      <PostToBlog />
      </div>
      <ExpertiseArea />
      <Newsletter />
      <Testimony />
      <CallToBlog />
      <div className="FooterComponent">
        { footerInfo.map ((FooterComponent) =>{
          return(
            <Footer
                Address = { FooterComponent.Address }
                Phone = { FooterComponent.Phone}
                Email = {FooterComponent.Email }
                Facebook = { FooterComponent.Facebook }
                Instagram = { FooterComponent.Instagram }
                LinkedIn = { FooterComponent.LinkedIn }
            />
          );
        })}
      </div>
 
      
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))