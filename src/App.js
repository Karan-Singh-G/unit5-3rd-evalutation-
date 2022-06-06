import { useContext } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";

import Login from "./pages/Login";

function App() {
 const {isAuthorize}=useContext(AuthContext)

  return (
    <div className="App">
      {isAuthorize ? <Navbar/>:<Login/>}
     
 {/* <Navbar/>
     <Products/>
<Login/>
  */}

      
 
 
    </div>
  );
}

export default App;
