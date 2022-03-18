import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GameList from './GameList';
import GameDetails from './GameDetails';

const Navigation = (props) => {
    return (
        <div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>List of games</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<GameList />} />
                <Route path='/games/:id' element={<GameDetails  />} />
            </Routes>

        </div>
    );
};

export default Navigation;