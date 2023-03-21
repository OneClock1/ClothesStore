import React, { useState } from "react"

import logo from "./Logo.png"
import "./Header.scss"


const Header = () => {
    const [title, setTitle] = useState("Please, login!");
   

   
    const changeTitle = () =>{
        setTitle("is logged");
    }
    //const clickMe = (login) => {
        //console.log('clicked' +login);
   // }
    return (
    <div>
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={ logo } alt="logo" className="logo" />
                </div>
            </div>
        
        <nav className="nav">
            <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Shop</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            </ul>
            
        </nav>
        <div className="login-container">
            <button className="login-button" onClick={ () => changeTitle() }>login</button>
        </div>
        
        
        </header>
        <h3>{ title }</h3>
    </div>
    );
}

export default Header;