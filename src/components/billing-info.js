import React from 'react';
import './card-info.css';

function BillingInfo(props){
    return(
        <div className="BillingInfo">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
            <i id="Truck" className="fas fa-truck"></i>
            <p id="Cost">$250.00</p>
            <p id="Amount">1</p>
            <button id="Options"><i id="OptionsIcon" className="fas fa-ellipsis-v"></i></button>
        </div>
    )
}

export default BillingInfo;

