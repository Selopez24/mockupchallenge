import React from 'react';
import bulb from '../images/bulb.svg';
import './icons.css';


function Bulb(props){
    return(
        <div className="bulb" >
            <img src={bulb} width={15}/>
            <span> Smart Filters</span>
        </div>
    )
}

export default Bulb;