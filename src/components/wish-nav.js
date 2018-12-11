import  React from 'react';
import './nav-items.css'


function WishNav(props){
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="WishNav"><i id = "btn" className="fa fa-star"></i>Wishlist</button>

        </div>
    )
}

export default WishNav;