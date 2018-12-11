import React from 'react';
import './modal.css'

function Modal(props){
    return(
        <div className="Modal">
            {props.children}
        </div>
    )
}

export default Modal;