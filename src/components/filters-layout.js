import React from 'react';
import './filters-layout.css';


function FiltersLayOut(props){
    return(
        <div className="filters-layout" >
            {props.children}
        </div>
    )
}

export default FiltersLayOut;