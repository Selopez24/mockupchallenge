import  React from 'react';
import './nav-items.css';


function HomeNav(props){
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="HomeNav"><i id = "btn" className="fa fa-home"></i>Home</button>

        </div>
    )
}

export default HomeNav;