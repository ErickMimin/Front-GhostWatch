import React from 'react';
import AlertB from 'react-bootstrap/Alert';

const Alert: React.FC<{ show: boolean, type: number, text: string }> = ({show, type, text}) => {
  return (
    <AlertB 
        variant={type === 1 ? "warning" : "danger"} 
        show={show}
        style={{position: "absolute"}}
        className="alert-modal">
        {text}
    </AlertB>
  ); 
}

export default Alert;