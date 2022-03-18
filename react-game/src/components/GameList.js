import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Game from './Game';



const GameList = () => {

    const [allGames, setAllGames] = useState([])
    const [clickGame, setClickGame] = useState(false)

    useEffect(() => {
        axios
            .get('https://apis.wilders.dev/wild-games/games/')
            .then(response => {
                setAllGames(response.data)
            })
    }, [clickGame])

    const bestGames = () => {
        setClickGame(!clickGame)
    }

    return (
        <div>

            <div>
                <h1>The list of games</h1>
                <button onClick={bestGames}> {clickGame ? 'Show me all games !' : 'Show me the best games !'}</button>
                {allGames
                    .filter((game) => !clickGame || game.rating > 4.5)
                    .map(game => {
                        return <Game key={game.id} {...game} />

                    })}
            </div>
            
        </div>
    );
};

export default GameList;