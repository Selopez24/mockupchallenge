import React from 'react';
import './card-info.css';
import TimeInfo from './time-info';
import LocationInfo from './location-info';
import BillingInfo from './billing-info';

function CardInfo(props){
    return(
        <div className="CardInfo">
            <TimeInfo/>
            <LocationInfo/>
            <BillingInfo/>
        </div>
    )
}

export default CardInfo;
