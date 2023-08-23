import React from "react";
import "./About.scss";

export const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <h3 className="about__title">Hi, I'm Brodie Snelling</h3>
        <div className="about__content">
          <p className="about__text">
            I am a software developer with a background in mechanical
            engineering, combining both my engineering experience with my
            passion for problem-solving and innovation to craft efficient
            solutions to software challenges. I have experience in both front-
            and back-end development and thrive in applying analytical skills to
            streamline complex processes and deliver optimal outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};
