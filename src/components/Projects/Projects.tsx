import React from 'react';
import './Projects.scss';
import Leep from '../../assets/images/leep-banner.png'

export const Projects: React.FC = () => {
    return (
        <div className="projects">
            <div className='projects__wrapper'>
                <h2 className="projects__title">Projects</h2>
                <div className='projects__container'>
                    <div className='projects__card'>
                        <h2 className='projects__name'>Leep</h2>
                        <div className='projects__content'>
                            <img className='projects__image' src={Leep} alt='leep profile'/>
                        </div>
                        <div className='projects__card-info'>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}