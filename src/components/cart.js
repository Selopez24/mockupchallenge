import React from 'react';
import cart from '../images/cart.svg';
import './icons.css';


function Cart(props){
    return(
        <div className="icon" >
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img src={cart} width={50}/>
        </div>
    )
}

export default Cart;