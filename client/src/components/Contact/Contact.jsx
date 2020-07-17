import React, { useState, useEffect }  from 'react';
import './Contact.css'

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
            <form className= "Form-Newsletter">
                <div className= "name">
                    <label htmlFor="">asdasdasdasd</label>
                    <input type="asdasdasdsa" name="" id=""/>
                </div>

                <button type= "submit"> <p>Inscrever-se</p></button>
            </form>
        </div>
        )
    }
    
    export default Contact;