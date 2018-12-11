import React from 'react';
import './info-layout.css';


function InfoLayout(props){
    return(
        <div className="InfoLayout" >
            {props.children}
        </div>
    )
}

export default InfoLayout;