import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Game from './Game';

const GameList = () => {

    const [allGames, setAllGames] = useState([])

    useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then(response => {
            setAllGames(response.data)
        })
    }, [])

    return (
        <div>
            {allGames.map(game => {
                return  <Game key={game.id} name={game.name} dateCreation={game.released} backgrd={game.background_image}/>
            })}
        </div>
    );
};

export default GameList;