import React from 'react';
import '../styles/header.css'


const Header = (props) => {
    return (
        <div className='header'>
            <h1 className='header-title'>{props.name}</h1>
            <h3 className='header-welcome'>Welcome to Team !!!!</h3><br />
            <p className='header-paragraph'>I know, I know... another welcome message, pff !</p>
            <p className='header-paragraph'>So don't wait and look down !</p>
        </div>
    );
};

export default Header;