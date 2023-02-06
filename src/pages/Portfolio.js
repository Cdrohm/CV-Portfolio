import React from 'react';
import Nav from '../components/Nav';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Nav />
            <ProjectList />
        </div>
    );
};

export default Portfolio;