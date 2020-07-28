import React, {useState, useEffect} from 'react';
import './Footer.css';
import axios from 'axios';

function Footer(){
    const [footerInfo, setFooterInfo] = useState([]);
    const LoadFooter = async() => {
      const answer = await axios.get('http://localhost:3001/api/footers');
      setFooterInfo(answer.data);
    };
    
    useEffect(() => {
        LoadFooter();
    },[]);
    
    return(
        <div className="Footer">
                <div className="TopLine">
                    <div className="TopOne">
                        <div className="Adress">
                            <h2>Endereço</h2>
                        <p>{ footerInfo[0]?.Address }</p>
                        </div>
                        <div className="Phone">
                            <h2>Telefone</h2>
                            <p>{ footerInfo[0]?.Phone }</p>  
                        </div>
                    </div>
                    <div className="TopTwo">
                        <div className="E-mail">
                            <h2>E-mail</h2>
                            <p>{ footerInfo[0]?.Email }</p>
                        </div>
                        <div className="SocialMedia">
                            <a href = { footerInfo[0]?.Facebook }>
                                <img src={require("./Icon awesome-facebook-square (2).svg")} alt="facebook logo"/>
                            </a>
                            <a href = { footerInfo[0]?.Instagram }>
                                <img src={require("./Icon awesome-instagram.svg")} alt="instagram logo"/>
                            </a>
                            <a href = { footerInfo[0]?.LinkedIn }>
                                <img src={require("./Icon awesome-linkedin.svg")} alt="linkedin logo"/> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="BottomLine">
                    <div className="CITiRights">
                        <p>&copy; 2020 CITi-Todos os direitos reservados</p>
                    </div>
                    <div className="MadeWith">
                        <p>Made with <strong>&lt; &#x0002F; &gt;</strong> and <strong>&hearts;</strong> by CITi </p>
                    </div>
                </div>
        </div>
    );
}


export default Footer;