import  React from 'react';
import './plus-btn.css';


function PlusBtn(props){
    return(
        <div>
            <button className="PlusBtn">
            <i id="Plus"className="fas fa-plus-circle"></i>
            </button>
        </div>
    )
}

export default PlusBtn;