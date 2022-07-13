import React from 'react';
import './Projects.scss';
import Leep from '../../assets/images/leep-banner.png';
import Instock from '../../assets/images/instock-warehouse.png';
import Game from '../../assets/images/game.png';

export const Projects: React.FC = () => {
    return (
        <div className="projects">
            <div className='projects__wrapper'>
                <h1 className="projects__title">Projects</h1>
                <div className='projects__container'>
                    <div className='projects__card'>
                        <div className='projects__content'>
                            <img className='projects__image' src={Leep} alt='leep profile'/>
                        </div>
                        <div className='projects__card-info'>
                            <div className='projects__card-container'>
                                <h2 className='projects__subtitle'>Helping Small Artists . . .</h2>
                                <h2 className='projects__name'>Leep</h2>
                                <div className='projects__card-info--container'>
                                    <p className='projects__description'>Leep is a full stack web application with the aim of helping small music artists get discovered. Leep
                                    uses React and Sass for the frontend, JWT for authentication, Nodejs, Express, and Knex for the backend, and MySQL for the database. 
                                    Leep was built in 7 days for my capstone project at BrainStation, and is aimed to provide a demo for a larger project being built.</p>
                                </div>
                            </div>
                            <div className='projects__links'>
                                <a className='projects__links-link' href='https://leep-can.netlify.app/'>Live Demo</a>
                                <a className='projects__links-link' href='https://github.com/bsnelling9/Leep'>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div className='projects__card'>
                        <div className='projects__content'>
                            <img className='projects__image' src={Instock} alt='instock warehouse list'/>
                        </div>
                        <div className='projects__card-info'>
                            <div className='projects__card-container'>
                                <h2 className='projects__subtitle'>Helping Warehouse Managers . . .</h2>
                                <h2 className='projects__name'>InStock</h2>
                                <div className='projects__card-info--container'>
                                    <p className='projects__description'>Instock is a inventory management web application with the aim of helping users keep track of inventory accross multiple warehouses. 
                                    InStock uses React and Sass on the front end, and Node.js and Express on the backend.</p>
                                </div>
                            </div>
                            <div className='projects__links'>
                                {<a className='projects__links-link' href='https://brodieinstock.netlify.app/'>Live Demo</a>}
                                <a className='projects__links-link' href='https://github.com/bsnelling9/instock'>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div className='projects__card'>
                        <div className='projects__content'>
                            <img className='projects__image' src={Game} alt='instock warehouse list'/>
                        </div>
                        <div className='projects__card-info'>
                            <div className='projects__card-container'>
                                <h2 className='projects__subtitle'>Another Survival Video Game . . .</h2>
                                <h2 className='projects__name'>Video Game</h2>
                                <div className='projects__card-info--container'>
                                    <p className='projects__description'>'Video Game' is a souls like game that I'm making in Unity Game Engine as a hobby. The game will start out as a 1v1 
                                    arena combat game where players battle each other or versus AI. With the aim of eventually being a 5v5 arena game vs AI or players. 
                                    </p>
                                </div>
                            </div>
                            <div className='projects__links'>
                                <a className='projects__links-link' href='https://www.youtube.com/watch?v=ocqOynj9tfw'>Video Demo</a>
                                <a className='projects__links-link' href='https://github.com/bsnelling9/game'>Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}