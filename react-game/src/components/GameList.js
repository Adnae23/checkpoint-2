import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Game from './Game';
import '../styles/gameList.css'



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

            <div className='gamelist'>
                <div>
                    <h1 className='gamelist-title'>The different games</h1>
                </div>
                <div className='gamelist-button'>
                    <button className='gamelist-button' onClick={bestGames}> {clickGame ? 'Show me all games !' : 'Show me the best games !'}</button>
                </div>
                <div className='gamelist-game'>
                {allGames
                        .filter((game) => !clickGame || game.rating > 4.5)
                        .map(game => {
                            return <Game key={game.id} {...game} />
                        })}
                </div>
            </div>

        </div>
    );
};

export default GameList;