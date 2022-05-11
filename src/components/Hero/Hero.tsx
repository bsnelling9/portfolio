import React from 'react';
import './Hero.scss';

export const Hero: React.FC = () => {
    
    const dog = 'hello world';
    console.log(dog)
    return (
        <div className="hero">
           <div className="hero__wrapper">
                <span className="hero__intro">Hi, my name is</span>
                <h1 className="hero__title">Brodie Snelling</h1>
                <h2 className="hero__subtitle">Web Developer, Junior Software Developer</h2>
                <div className="hero__container">
                    <p className="hero__container-content">
                        {" "}
                        I'm a developer from Canada with a background in mechanical engineering (EIT) and a 
                        strong interest in cloud computing, software engineering and web development. I'm also and
                        AWS Certified Solutions Architect - Associate.
                    </p>
                </div>
            </div>
        </div>
    )
}