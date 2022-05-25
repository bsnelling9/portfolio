import React from 'react';
import './Hero.scss';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';

export const Hero: React.FC = () => {
    
    return (
        <div className="hero">
           <div className="hero__wrapper">
                <h3 className="hero__intro">Hi, my name is ...</h3>
                <h1 className="hero__title">Brodie Snelling</h1>
                <h2 className="hero__subtitle">Web Developer, Junior Software Developer</h2>
                <div className="hero__container">
                    <p className="hero__container-content">
                        I'm a developer from Canada with a background in Mechanical Engineering (EIT) and a 
                        strong interest in cloud computing, Software Engineering and Web Development. I'm also an 
                        <a className='hero__link' href='https://www.credly.com/badges/3a435e50-de8a-44d2-814f-76b4a867926b'> AWS Certified Solutions Architect - Associate</a>.
                        Click the links bellow to see my resume, GitHub and LinkedIn profile
                    </p>
                </div>
                <div className='hero__icon-container'>
                    <div className='hero__btn-container'>
                        <a className='hero__btn' href='/BrodieSnelling-Resume.pdf'>Resume</a>
                    </div>
                    <a className='hero__icon--link' href='https://github.com/bsnelling9'>
                        <img className='infocard__icon' src={Github} alt="GitHub logo"/>
                    </a>
                    <a className='hero__icon--link' href='https://www.linkedin.com/in/brodie-snelling/'>
                        <img className='infocard__icon' src={LinkedIn} alt='LinkedIn Logo'/>
                    </a>  
                </div>
            </div>
        </div>
    )
}