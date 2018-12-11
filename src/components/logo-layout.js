import React from 'react';
import logo from '../images/logo.png';
import './logo-layout.css';


function Logo(props){
    return(
        <div className="logo-layout" >
            <img src={logo} width={100} alt="Starkcore"/>
        </div>
    )
}

export default Logo;