import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';




const Detail = () => {
 

  const [dentista, setDentista] = useState({});
  const params = useParams();

  const getDentistaDetail = async () =>{

    const res = await
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json()
    setDentista(data)
  }

  useEffect(()=>{

    getDentistaDetail();
  })

  
  return (
    <>
      <h1>Detail Dentist id </h1>
      

      <div>

        <img  src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
        <li>Nombre: {dentista.name}</li>
        <li>Email: {dentista.email}</li>
        <li>Telefono: {dentista.phone}</li>
        <li>Sitio web: {dentista.website}</li>
      </div>
    </>
  )
}

export default Detail