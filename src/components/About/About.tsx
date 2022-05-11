import React from 'react';
import './About.scss';

export const About: React.FC = () => {
    return (
        <div className="about">
            <div className='about__wrapper'>
                <h3 className="about__title">Hi, I'm Brodie Snelling</h3>
                <div className='about__content'>
                    <p className='about__text'>
                        I have always loved problem solving. Which is why I went to the University of Ottawa to get a degree in Mechanical Engineering 
                    </p>
                </div>
            </div>
        </div>
    )
}