import React from 'react';
import calendar from '../images/calendar.svg';


function Calendar(props){
    return(
        <div className="icon" >
            <img src={calendar} width={50} alt="calendar"/>
        </div>
    )
}

export default Calendar;