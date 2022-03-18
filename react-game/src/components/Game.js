import React from 'react';

const Game = (props) => {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <h3>{props.dateCreation}</h3>
                <img src={props.backgrd} alt="image du jeu" />
            </div>
            
        </div>
    );
};

export default Game;