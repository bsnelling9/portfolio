import React from 'react';
import './Project.scss';

export const Project: React.FC = () => {
    return (
        <div className="projects">
            <div className='projects__wrapper'>
                <h2 className="projects__title">Projects</h2>
                <div className='projects__content'>
                    <div className='projects__card'>
                        <h3 className='projects__name'>Leep</h3>
                        <div className='projects__card--wrapper'>
                            content: image, project githublink, and link to launched project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}