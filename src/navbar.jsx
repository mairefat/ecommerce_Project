import React, { useState } from 'react'
import App from './App';
function NavBar(props) {


    return (
        

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
                <a className="navbar-brand " href="#"><span className='p-2'></span>E-Commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contactUs">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
           
            <li className='position-absolute top-30 end-0 icon' >
                <span style={{ cursor: "pointer" }}  >
                    <i className="fa-solid fa-cart-plus "></i>
                </span >
                {/* <span className='count' onAdd={increamentCount}>{cart}</span> */}
                <span className='count'>{props.cartCount}</span>
            </li>

        </nav>
    );
};


export default NavBar;