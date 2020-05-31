import React from 'react';
import LogoGhost from '../Resources/Logo_GhostWatch_Shield.svg';
import Navbar from "react-bootstrap/Navbar";

const HeadGhost: React.FC = () => {
  return (
    <Navbar className="justify-content-center">
        <div className="row mt-3" style={{justifyContent: 'center'}}>
            <div className="col-auto">
                <a href="/"><img src={LogoGhost} alt="LogoGhostWatch" style={{ width : '60px'}}/></a>
            </div>
            <div className="col-auto">
                <h1 className="text-center">Ghost Watch</h1>
            </div> 
        </div>
    </Navbar>
  ); 
}

export default HeadGhost;