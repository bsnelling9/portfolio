import React from 'react';
import './About.scss';

export const About: React.FC = () => {
    return (
        <div className="about">
            <div className='about__wrapper'>
                <h3 className="about__title">Hi, I'm Brodie Snelling</h3>
                <div className='about__content'>
                    <p className='about__text'>
                    I have always enjoyed math and science because they allow me to use problem-solving and logic to answer questions. 
                    This interest led me to pursue a degree in Mechanical Engineering. Although I enjoyed the program itself, the work 
                    I did once employed did not exactly reflect what I was passionate about. Advanced software in the field has automated 
                    most of the problem-solving aspects of the job, leaving 3D modeling to the engineers. I did enjoy the creativity of designing 
                    products but was missing the critical thinking components. After 3 years of working as a mechanical engineer, 
                    I decided that it was time for a change. 

                    
                    After work I spent time after work learning about data structures, algothiums 
                    I attended BrainStations Web Devel
                    </p>
                </div>
            </div>
        </div>
    )
}