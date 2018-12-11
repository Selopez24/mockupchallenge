import React from 'react';
import './leftpad.css';


function LeftPad(props){
    return(
        <div className="leftpad-layout" >
            {props.children}
        </div>
    )
}

export default LeftPad;