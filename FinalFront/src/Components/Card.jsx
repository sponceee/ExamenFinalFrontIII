import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context"


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = (dentista) => {


    dispatch({ type: "AGREGAR_DENTISTA_FAVORITO", dentista } );
    alert  ( `Se añadio a ${name} a tus favoritos` )
  }



  const removeFav = (dentista) => {


    dispatch ({ type: "REMOVE_DENTISTA", dentista})
    alert (`Se eliminó a ${name} de tus favoritos`)


  };

  const isFav = state.favsDentistas.find((dentista) => dentista.id === id);

  return (
    <div className="card">

    <Link to={`/detail/${id}`}>


      <div>
        <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />

        <h4>{id} - {name}</h4>

        <h5>{username}</h5>
      </div>

    </Link>

    <div>

      <button onClick={() => addFav({id: id, nombre: name, username: username})}  disabled={isFav}> Agregar a favorito </button>
      <button onClick={() => removeFav( {id:id})} disabled={!isFav} > Eliminar </button>


    </div>

  </div>
  );
};

export default Card;
