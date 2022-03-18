import React from 'react';

import { Link } from 'react-router-dom';

const Games = (props) => {
    return (
        <div>
            <div>
                <h1>{props.name}</h1> 
                <h3>Creation date: {props.released}</h3>
                <p>Rating: {props.rating}</p>
                <img src={props.background_image} alt={props.name} />
                <button>
                    <Link to={`/games/${props.id}`}>The selected game</Link>
                </button>
            </div>

        </div>
    );
};

export default Games;