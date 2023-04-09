import React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";


const Navbar = () => {


  const {state, dispatch} = useContext(ContextGlobal);

  const cambiarTema = (tema) => {

    dispatch({ type: 'CAMBIAR_TEMA', tema });

  };

  return (
    <nav>
      <ul>

        <li><Link to="/home"> Inicio </Link></li>
        <li><Link to="/favs"> Favoritos</Link></li>
        <li><Link to="/contact"> Contacto</Link></li>

      </ul>

      <button onClick={() => cambiarTema( !state.tema)}> {state.tema ? 'oscuro':'defacult de sistema'} </button>
    </nav>
  )
}

export default Navbar