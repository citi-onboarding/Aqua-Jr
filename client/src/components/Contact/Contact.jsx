import React, { useState, useEffect }  from 'react';
import './Contact.css'
import img from "./contact-img.png"



function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        about: '',
        menssage: '',
    })
    
    const Submit = (e) => {

        alert(form.name)
        alert(form.email)
        alert(form.about)
        alert(form.menssage)
    }

    return (
        <div className= "Body-contact" id="contact">
            <div className="forms-text">

                <h2>
                    Contato
                </h2>
                
                <p>
                    Fale conosco lorem ipsum dolor
                </p>

                <form className= "form-contact" onSubmit= {Submit}>

                    <div className= "name">
                        <label htmlFor="">Nome</label>
                        <input type="text" name="" id="" onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className= "email">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>

                    <div className= "assunto">
                        <label htmlFor="">Assunto</label>
                        <input type="text" name="" id="" onChange={(e) => setForm({...form, about: e.target.value})} />
                    </div>

                    <div className= "mensagem">
                        <label htmlFor="">Mensagem</label>
                        <textarea name="mensagem" id="mensagem" cols="30" rows="5" onChange={(e) => setForm({...form, menssage: e.target.value})} />
                    </div>

                    <button type= "submit"> 
                        Enviar mensagem
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