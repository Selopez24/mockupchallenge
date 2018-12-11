import React from 'react';
import './modal.css'

function Modal(props){
    return(
        <div className="Modal">
            {props.children}
            <button id="ModalClose" onClick={props.handleClick}>cerrar</button>
        </div>
    )
}

export default Modal;