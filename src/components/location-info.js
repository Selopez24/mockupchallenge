import React from 'react';
import './card-info.css';

function LocationInfo(props){
    return(
        <div className="LocationInfo">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <p id="LocationText">Houston. TX, 33619</p>
            <i id ="LocationArrow"className="fa fa-location-arrow"></i>
            <i id="PointingArrow"className="fa fa-angle-down"></i>
            <p id="LocationText">Atlanta. GA, 30123</p>

        </div>
    )
}

export default LocationInfo;

