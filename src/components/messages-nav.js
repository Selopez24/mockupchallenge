import  React from 'react';
import './nav-items.css'


function MessagesNav(props){
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="MessagesNav"><i id = "btn" className="fa fa-envelope"></i>Messages</button>

        </div>
    )
}

export default MessagesNav;