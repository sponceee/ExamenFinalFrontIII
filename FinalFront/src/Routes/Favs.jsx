import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state , dispatch} = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>

      <div className="card-grid">

      <button onClick={() => dispatch({type:'ELIMINAR_TODOS_LOS_DENTISTAS'})}>Eliminar todos</button>

      </div>
      
      <div className="card-grid">

        {state.favsDentistas.map((e)  => (

          <Card key={e.id} name={e.name} username={e.username} id={e.id}/>

        ))}
      </div>


        
    </>
  );
};

export default Favs;
