import React from 'react';
import './Projects.scss';
import Leep from '../../assets/images/leep-banner.png'

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
                            <h2 className='projects__name'>Leep . . .</h2>
                            <h2 className='projects__subtitle'>Helping Small Artists</h2>
                            <div className='projects__card-info--container'>
                                <p className='projects__description'>Leep is a full stack web application with the aim of helping small music artists get discovered,
                                using React, Nodejs, MySQL and JWT for authentication. Leep was built in 7 days for my capstone project at BrainStation, and is aimed 
                                to provide a demo for a larger project being built.</p>
                            </div>
                            <div className='projects__links'>
                                <a className='projects__links-link' href='https://leep-can.netlify.app/'>Live Demo</a>
                                <a className='projects__links-link' href='https://github.com/bsnelling9/Leep'>Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}