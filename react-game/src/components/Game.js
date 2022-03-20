import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gameList.css'


const Games = (props) => {


    return (
        <div className='game'>
            <div className='game-onlyOne'>
                <h1>{props.name}</h1> 
                <h3>Creation date: {props.released}</h3>
                <p>Rating: {props.rating}</p>
                <img className='game-img' src={props.background_image} alt={props.name} />
                <button className='game-btn'>
                    <Link to={`/games/${props.id}`}>The selected game</Link>
                </button>
            </div>

        </div>
    );
};

export default Games;