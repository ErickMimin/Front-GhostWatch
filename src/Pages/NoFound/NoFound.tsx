import React from 'react';
import HeadGhost from '../../Components/HeadGhost';
import LogoNoFound from '../../Resources/Logo_GhostWatch_NoFound.svg';

const NoFound: React.FC = () => {
  return (
    <div className="container">
      {/* --- Head --- */}
      <HeadGhost></HeadGhost>
      <div className="row mt-5" style={{justifyContent: 'center'}}>
        <div className="col-auto">
            <img src={LogoNoFound} alt="LogoNoFound" style={{width : '120px'}}/>
        </div>
        <div className="w-100"></div>
        <div className="col-auto">
            <h1>Página no encontrada</h1>
        </div>
      </div>
    </div>

  ); 
}

export default NoFound;