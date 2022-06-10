import React from 'react';
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Projects } from "../../components/Projects/Projects";
import './HomePage.scss';

export const HomePage: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            {/* <About /> */}
            <Projects />
        </div>
    )
}