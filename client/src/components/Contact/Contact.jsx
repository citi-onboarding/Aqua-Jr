import React, { useState, useEffect }  from 'react';
import './Contact.css'
import img from "./contact-img.png"

//onchange{(e) => setA({...a, name: e.target.value})}

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        about: '',
        menssage: '',
    })
    
    /*
    const Submit = (e) => {

        if(name === '' ){
            alert('Por favor, insira um email válido!')
        }
        else{
            alert('E-mail cadastrado! Obrigado.')
        }

    } */

    return (
        <div className= "Body-contact">
            <div className="forms-text">

                <h2>
                    Contato
                </h2>
                
                <p>
                    Fale conosco lorem ipsum dolor
                </p>

                <form className= "form-contact">

                    <div className= "name">
                        <label htmlFor="">Nome</label>
                        <input type="" name="" id=""/>
                    </div>
                    <div className= "email">
                        <label htmlFor="">Email</label>
                        <input type="" name="" id=""/>
                    </div>
                    <div className= "assunto">
                        <label htmlFor="">Assunto</label>
                        <input type="" name="" id=""/>
                    </div>
                    <div className= "mensagem">
                        <label htmlFor="">Mensagem</label>
                        <input type="textarea" name="" id=""/>
                    </div>

                    <button type= "submit"> 
                        <p>Inscrever-se</p>
                    </button>

                </form>
            </div>
            <div className="Contact-image">
                <img src={img} alt="Imagem de um homem usando um microscópio"/>
            </div>
        </div>
        )
    }
    
    export default Contact;