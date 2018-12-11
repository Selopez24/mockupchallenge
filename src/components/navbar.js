import React from 'react';
import './navbar.css';


function NavBar(props){
    return(
        <div className="NavBar" >
            {props.children}
        </div>
    )
}

export default NavBar;