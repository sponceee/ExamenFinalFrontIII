import { useState, useEffect, useReducer } from "react";
import { createContext } from "react";


export const initialState =
{
  theme: localStorage.getItem('tema'),

  dentistasFavoritos: []

}
  export const ContextGlobal = createContext();

  export const ContextProvider = ({ children }) => {

     const getFavoritosFromStorage = () => {

    const localData = localStorage.getItem("favoritos")

    return localData ? JSON.parse(localData) : [];

  };

  const guardarFavoritosFromStorage = (favoritos) => {

    localStorage.setItem("favoritos", JSON.stringify(favoritos))

  };

  const reducer = (state, action) => {

    switch (action.type) {

      case 'AGREGAR_DENTISTA_FAVORITO': {

          const dentistaExists = state.dentistasFavoritos.find((dentista) =>dentista.id ===action.dentista.id);

        if (dentistaExists) {

            return state;

        }
        const newDentistasFavoritos = [...state.dentistasFavoritos, action.dentist]

        guardarFavoritosFromStorage(newDentistasFavoritos)

           return { ...state, dentistasFavoritos: newDentistasFavoritos };
      }

      case 'CARGAR_DENTISTAS_FAVORITOS': {

         return { ...state, dentistasFavoritos: getFavoritosFromStorage() };

      }
      case 'REMOVE_DENTISTA': {

         const newDentistasFavoritos = state.dentistasFavoritos.filter((dentista) => dentista.id !== action.dentista.id);

        guardarFavoritosFromStorage(newDentistasFavoritos);

         return { ...state, favsDentists: newDentistasFavoritos };
      }
        case 'ELIMINAR_TODOS_LOS_DENTISTAS': {

        localStorage.removeItem("favs");

         return { ...state, newDentistasFavoritos: [] };
      }
        case 'CAMBIAR_TEMA': {
        
         localStorage.setItem('tema', action.theme);

        return { ...state, theme:action.theme };
      }
        default:

        return state;
    }
  };

    const [state, dispatch] = useReducer(reducer, initialState);

    const [dentistas, setDentistas] = useState([]);

   const getDentistas = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    setDentistas(data)
  };

  useEffect(() => {

    getDentistas();
    dispatch({ type: "LOAD_DENTISTaS_FAVORITOS" });

  }, [])

  return (
    <ContextGlobal.Provider value={{ dentistas, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};