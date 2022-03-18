import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
 
    const {id} = useParams()
    const [soloGame, setSoloGame]= useState({})

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(response => {
                setSoloGame(response.data)
            })
    }, [id])

    return (
        <div>
            <h1>{soloGame.name}</h1>
            <h3>Creation date: {soloGame.released}</h3>
            <p>Rating: {soloGame.rating}</p>
            <img src={soloGame.background_image} alt={soloGame.name} />
        </div>
    );
};

export default GameDetails;