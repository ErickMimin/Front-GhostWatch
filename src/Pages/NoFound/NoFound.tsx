import React from 'react';
import HeadGhost from '../../Components/HeadGhost';
import LogoNoFound from '../../Resources/Logo_GhostWatch_NoFound.svg';
import { useEffect } from 'react';

const NoFound: React.FC<{history: any}> = ({history}) => {
  
  useEffect(()=>{
    setTimeout(() =>{
      history.replace('/');
    }, 2000);
  });

  return (
    <>
      <HeadGhost></HeadGhost>
      <div className="container">
        {/* --- Head --- */}
        <div className="row mt-5" style={{justifyContent: 'center'}}>
          <div className="col-auto">
              <img src={LogoNoFound} alt="LogoNoFound" style={{width : '120px'}}/>
          </div>
          <div className="w-100"></div>
          <div className="col-auto text-center">
              <h1>Página no encontrada</h1><br/>
              <h1>Redirigiendo...</h1>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default NoFound;