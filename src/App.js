import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Util from "./hooks/Util";
import Login from "./pages/Login"
import Posts from "./pages/Posts";


function App() {


// Util.refreshToken();

  return (
    <div>
      <div className="container-md mt-5">
      
        {
         Util.RefreshToken()  
        }
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
     
    </div>
    



  );
  
}


export default App;