import React from 'react';
import {useState, useEffect, useRef} from 'react';
import HeadGhost from '../../Components/HeadGhost';
import Alert from '../../Components/Alert';
import LogoGhost from '../../Resources/Logo_GhostWatch_Shield.svg';
import LogoTwitter from '../../Resources/Logo_Twitter.svg';
import LogoFacebook from '../../Resources/Logo_Facebook.svg';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './Home.css';

const Home: React.FC = () => {
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null as any);
  const [alert, setAlert] = useState({show: false, text: "", type: 1});
  const fileInput = useRef<HTMLInputElement>(null);
  const chargeCheck = useRef<HTMLInputElement>(null);
  const modal = useRef<Modal<"div">>(null);
  
  const handleClose = () => {
    setShow(false);
    setImage("");
  };

  const handleButton = () => {
    if(chargeCheck.current?.checked)
      fileInput.current?.click();
    else{
      setAlert({show: true, text: "Debe aceptar nuestros terminos y condiciones.", type: 1});
    }
  };
  
  /* Manejador de carga de imagenes locales */
  const handleChargeImage = (event:any) => {
    setImage(event.target.value);
    setShow(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  };

  /* Hook para desactivar alert's */
  useEffect(() => {
    if(alert?.show)
      setTimeout(()=>{
        setAlert({show: false, text: "", type: 1});
      }, 4000);
  }, [alert]);

  return (
    <>
      {/* --- Modal de alertas --- */}
      <Alert 
        show={alert.show}
        type={alert.type}
        text={alert.text}/>

      {/* --- Modal de preview --- */}
      <Modal 
        show={show} 
        ref={modal} 
        onHide={handleClose}
        dialogClassName="modal-visi">
        <Modal.Header>
          <div className="modal-header-ghost .d-sm-none .d-md-block"><HeadGhost></HeadGhost></div>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          <Cropper
          src = {preview}
          className="cropper-ghost-image"
          // Cropper.js options
          minContainerHeight={200}
          viewMode = {2}
          aspectRatio={1}
          modal={false}
          minCropBoxHeight={280}
          background={false}
          guides={false} />
        </Modal.Body>
        <Modal.Footer style={{flexDirection: "column"}}>
          <div className="row">
            <div className="col">
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
            </div>
            <div className="col">
              <Button variant="primary" onClick={handleClose}>
                Procesar
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {/* --- Home --- */}
      <div className="container">
        {/* --- Title --- */}
        <div className="row justify-content-center mt-5">
          <div className="col-auto text-center">
            <h1>Ghost Watch</h1>
          </div>
        </div>
        {/* --- Logo --- */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <img src={LogoGhost} alt="LogoGhostWatch" style={{ width : '120px'}}/>
          </div>
        </div>
        {/* --- Carga de imagen --- */}
        <div className="row justify-content-center mt-5">
          <div className="col-auto">
            <Button onClick={handleButton}><i className='material-icons'>photo_camera</i> Cargar imagen </Button>
            <input type="file" id="filechooser"  accept=".jpg" className="d-none" value={image} ref={fileInput} onChange={handleChargeImage}></input>
          </div>
          <div className="w-100"></div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={chargeCheck} style={{marginTop: "0.5rem"}}/>
            <label className="form-check-label" htmlFor="exampleCheck1" style={{fontSize: "0.6rem"}}> 
              Acepto <a href="/terms-conditions" className="text-dark"> <b>terminos y condiciones. </b> </a>
            </label>
          </div>
        </div>
        {/* --- Pie de pagina --- */}
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <a className="text-dark" href="/about">Sobre nosotros</a> | <a className="text-dark" href="/contact">Contacto</a> | <a className="text-dark" href="/terms-conditions">Terminos y condiciones</a>
          </div>
          <div className="w-100"></div>
          <div className="col-auto text-center mt-2">
            <img src={LogoFacebook} alt="LogoFacebook" className="mr-2" style={{width: '30px'}}/>
            <img src={LogoTwitter} alt="LogoFacebook" style={{width: '30px'}}/>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default Home;