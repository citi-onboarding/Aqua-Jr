import React from 'react';
import './Footer.css';




function Footer(props){
    return(
        <div className="Footer">
            <div className="TopLine">
                <div className="Adress">
                    <h2>Endereço</h2>
                <p>{ props.Address }</p>
                </div>
                <div className="Phone">
                    <h2>Telefone</h2>
                    <p>{ props.Phone }</p>  
                </div>
                <div className="E-mail">
                    <h2>E-mail</h2>
                    <p>{ props.Email }</p>
                </div>
                <div className="SocialMedia">
                    <a href = { props.Facebook }>
                        <img src={require("./Icon awesome-facebook-square (2).svg")} alt="facebook logo"/>
                    </a>
                    <a href = {props.Instagram }>
                        <img src={require("./Icon awesome-instagram.svg")} alt="instagram logo"/>
                    </a>
                    <a href = {props.LinkedIn }>
                        <img src={require("./Icon awesome-linkedin.svg")} alt="linkedin logo"/> 
                    </a>
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