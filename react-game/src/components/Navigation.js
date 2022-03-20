import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GameList from './GameList';
import GameDetails from './GameDetails';


const Navigation = () => {
    return (
        <div className='navigation'>

            <nav>
                <ul className='navigation-link'>
                    <li>
                        <NavLink ClassName='navigation-link__navlink' to='/'>List of games</NavLink>
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