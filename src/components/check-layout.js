import React from 'react';
import './check-layout.css';


function CheckLayout(props){
    return(
        <div className="CheckLayout" >
            {props.children}
        </div>
    )
}

export default CheckLayout;