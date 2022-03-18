import React from 'react';


const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Welcome to Team !!!!</h3><br />
            <p>I know, I know... another welcome message, pff !</p><br />
            <p>So don't wait and look down !</p>
        </div>
    );
};

export default Header;