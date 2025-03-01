
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Private from "./components/private";
//import refreshToken from "./components/refreshToken";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";

import Util from "./hooks/util"

function App() {

AuthService.getCurrentUser()

// Util.refreshToken();

  return (
    <div>
      <div className="container-md mt-5">
      
        {
         Util.refreshToken()  
          // React.useEffect(() => {
          //   setInterval(() => {
          //     //alert('kjl');
          //    AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);
          //     //alert('Novo token:'+AuthService.getCurrentUser().refreshToken)
          //   }, 1 * 60 * 1000);
          // }, [])
        }
        <Routes>
          <Route path="/private" element={<Private />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
     
    </div>
    



  );
  
}


export default App;