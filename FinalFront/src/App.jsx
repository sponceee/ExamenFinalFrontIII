import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";


function App() {

  const {state} = useContext(ContextGlobal)

  return (
    
    <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
