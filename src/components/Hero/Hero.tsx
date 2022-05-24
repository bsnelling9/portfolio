import React from 'react';
import './Hero.scss';


export const Hero: React.FC = () => {
    
    return (
        <div className="hero">
           <div className="hero__wrapper">
                <h3 className="hero__intro">Hi, my name is</h3>
                <h1 className="hero__title">Brodie Snelling</h1>
                <h2 className="hero__subtitle">Web Developer, Junior Software Developer</h2>
                <div className="hero__container">
                    <p className="hero__container-content small-text">
                        I'm a developer from Canada with a background in mechanical engineering (EIT) and a 
                        strong interest in cloud computing, software engineering and web development. I'm also an 
                        <a className='hero__link small-text' href='https://www.credly.com/badges/3a435e50-de8a-44d2-814f-76b4a867926b'> AWS Certified Solutions Architect - Associate</a>.
                    </p>
                </div>
                <div className='hero__btn-container'>
                    <a className='btn' href='/BrodieSnelling-Resume.pdf'>Resume</a>
                </div>
            </div>
        </div>
    )
}