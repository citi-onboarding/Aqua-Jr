import React from "react";

import './Newsletter.css';
let value = ''
function Newsletter() {

    const handleChange = (e) => {
      
        // verify the code of the key
      var key = e.keyCode || e.charCode;

      console.log(key)
      // verifing if the key is a backspace
      const backspace = (e) => {
        if  (key === 8 || key === 46 ){
        return false;
        }
      }
      // if is, i will delete the last char of the string inputed.
      if( backspace){
        value = value.substr(0,( value.length -1));
      }
      
      value = e.target.value;
      console.log(value)
    }

    const Submit = (e) => {
        alert(value)
        alert('E-mail cadastrado! Obrigado.')
    }
    return (
    <div className= "Body-Newsletter">

        <div className= "Text-Newsletter">
            <h1>
                Inscreva-se na nossa Newsletter!
            </h1>
            <p>
            Por ela você irá receber conteúdo exclusivo e terá a possibilidade de receber descontos em nossos serviços!
            </p>
        </div>


        <form className= "Form-Newsletter" onSubmit= {Submit} >

            <input name="Email" type= 'email' onChange= {handleChange} placeholder = "E-mail"/>

            <button type= "submit" > <p>Inscrever-se</p></button>
        </form>
    </div>
    )
}

export default Newsletter;