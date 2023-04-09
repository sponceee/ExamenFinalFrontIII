import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const[nombre, setNombre]= useState("")
  const[email, setEmail] = useState("")
  const [mensaje, setMensaje]=useState("")
  const [error, setError] = useState(false);
  


  const onSubmitForm =(e)=>{



    e.preventDefault();

    const nombreValido = validacionNombre(nombre);
    const emailValido = validacionEmail(email);

    if (nombreValido || emailValido) {

      setMensaje(true)

  } else {

      setMensaje(false)
      alert("Por favor chequea que la información sea correcta");
  }

    
  }
  
  const onChangeName = (event) =>{

    setNombre (event.target.value);
  }

  const onChangeEmail = (event) =>{

    setEmail (event.target.value)

  }

 
  const validacionNombre = (e) => {

    const sinEspacios = e.trim();

    if (sinEspacios.length > 3) {

        return true


    }
    else {

        return false
    }

}

const validacionEmail = (e) => {


    const serieCaracteres = e.trim();



    if (serieCaracteres.length >= 6) {
        return true
    }
    else {
        return false
    }
}



  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="Ingrese su nombre" onChange={onChangeName} value={nombre}/>
        <input type="email" placeholder="Ingrese su email" onChange={onChangeEmail} value={email}/>
        <button>Enviar</button>
        
      </form>
      {mensaje ? <div> Gracias{nombre}, te contacteremos cuanto antes via mail </div> : <div> </div>}
    </div>
  );
};

export default Form;
