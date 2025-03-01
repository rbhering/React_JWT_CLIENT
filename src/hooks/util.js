import {useEffect} from 'react'

import AuthService from "../services/auth.service"; 




const RefreshToken = () => {    
    useEffect(() => {
        setInterval(() => {
         AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);
        }, 1 * 60 * 1000);
      }, [])
};



const Util = {
  
  RefreshToken
};

export default Util;