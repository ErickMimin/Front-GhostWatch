import React, { useEffect, useState, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {processImage, formImage} from '../../redux/actions/process-image';
import {imageProcessResult, isImageProcess, formProcessResult} from '../../redux/selectors';
import StarRating from '../../Components/StarRating';
import HeadGhost from '../../Components/HeadGhost';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Visualization.css';
import Alert from '../../Components/Alert';

const Visualization: React.FC<{history: any}> = ({history}) => {
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);
    const [alert, setAlert] = useState({show: false, text: "", type: 1});
    const commentTextArea = useRef<HTMLTextAreaElement>(null);
    const imageCheckBox = useRef<HTMLInputElement>(null);
    const ratingLabels = ["Demasiada mala para puntuar",
                          "Muy mala",
                          "Mala",
                          "Normal",
                          "Buena",
                          "Muy buena"];    
    const dispatch = useDispatch();
    const urlImage = useSelector(state => imageProcessResult(state));
    const stateReq = useSelector(state => isImageProcess(state));
    const formReq = useSelector(state => formProcessResult(state));

    const handleReception = () =>{
        if(!history.location.state?.state)
            history.replace('/');
        else if(!urlImage){
            dispatch(processImage(history.location.state));
        }
    };

    const handleOpen = () => {
        setShow(true);
        setRating(0);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleSend = () => {
        dispatch(formImage({
            score: rating,
            comment: commentTextArea.current?.value,
            imageOpen: imageCheckBox.current?.checked,
            imageName: urlImage
        }));
    };

    const handleRating = (r: number) => {
        setRating(r);
    };
  
    useEffect(()=>{
        handleReception();
    });

    useEffect(()=>{
        if(formReq?.ok)
            setShow(false);
        else
            setAlert({show: true, text: "No se pudo enviar el formulario.", type: 0});
    }, [formReq]);


  return (
    <>
    {/* --- Modal de alertas --- */}
        <Alert 
            show={alert.show}
            type={alert.type}
            text={alert.text}/>
            
        <Modal 
        show={show}  
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header>
            <div className="modal-header-ghost .d-sm-none .d-md-block"><HeadGhost></HeadGhost></div>
        </Modal.Header>
        <Modal.Body className="bg-primary text-center text-light">
            <span>¿Qué le parecio nuestro servicio?</span> <br/>
            <StarRating  rating={handleRating}> </StarRating>
            <span>{ratingLabels[rating]}</span><br/>
            <div className="form-group">
                <label htmlFor="commentTextarea">Escribanos su comentario: </label>
                <textarea ref={commentTextArea} className="form-control" id="commentTextarea" rows={3}></textarea>
            </div>
            ¿Permitiria que usaramos su imagen para alimentar nuestra inteligencia artificial?
            <div className="custom-control custom-switch">
                <input ref={imageCheckBox} type="checkbox" className="custom-control-input" id="switch"/>
                <label className="custom-control-label bg-aqua" htmlFor="switch">Si</label>
            </div>
        </Modal.Body>
        <Modal.Footer style={{flexDirection: "column"}}>
            <div className="row">
            <div className="col">
                <Button variant="danger" onClick={handleClose}>
                Cancelar
                </Button>
            </div>
            <div className="col">
                <Button variant="primary" onClick={handleSend}>
                Procesar
                </Button>
            </div>
            </div>
        </Modal.Footer>
        </Modal>
        <HeadGhost></HeadGhost>
        <div className="container container-card mt-3">
            {/* --- Head --- */}
        {stateReq? 
            <div className="text-center">
                <div className="spinner-grow text-primary mt-5" role="status" style={{width: '3rem', height: '3rem'}}>
                    <span className="sr-only">Cargando...</span>
                </div> <br/>
                <span>Cargando...</span>
                    
            </div> :
            <div className="card ghost-image">
                <img src={urlImage} className="card-img-top" alt="View"/>
                <div className="card-body text-center">
                    ¿Le ha gustado nuestro servicio? <br/>
                    Por favor compartanos su opinión en la siguiente <span role="button" onClick={handleOpen} className="text-dark"><b>encuesta</b></span>. <br/>
                    <a href='/' className="btn btn-primary mt-2">Nueva imagen</a>
                </div>
            </div>}            
        </div>
        </>
  ); 
}

export default Visualization;