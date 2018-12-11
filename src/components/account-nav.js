import  React from 'react';
import './nav-items.css'


function AccountNav(props){
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button className="AccountNav"><i id = "btn" className="fa fa-user"></i>
         Account
        </button>

        </div>
    )
}

export default AccountNav;