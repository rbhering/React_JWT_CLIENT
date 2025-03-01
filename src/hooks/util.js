import {useEffect} from 'react'

import AuthService from "../services/auth.service"; 




const refreshToken = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setInterval(() => {
          //alert('kjl');
         AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken);
          //alert('Novo token:'+AuthService.getCurrentUser().refreshToken)
        }, 1 * 60 * 1000);
      }, [])
};



const Util = {
  
  refreshToken
};

export default Util;