import React from 'react';
import Nav from '../components/Nav';
import Experience from '../components/skill/Experience';
import Hobbies from '../components/skill/Hobbies';
import Language from '../components/skill/Language';
import Other from '../components/skill/Other';

const Skill = () => {
    return (
        <div className="skill">
            <Nav />
            <div className="skillContent">
                <Experience />
                <Language />
                <Other />
                <Hobbies />
            </div>
        </div>
    );
};

export default Skill;