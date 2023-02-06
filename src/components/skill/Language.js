import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

// class component
class Language extends Component {
    state = {
        languages: [
            {id: 1, value:"HTML", xp: 4},
            {id: 2, value:"Css", xp: 3.5},
            {id: 3, value:"Javascript", xp: 1},
            {id: 4, value:"Solidity", xp: 0.2},

        ],

        frameworks: [
            {id: 1, value:"React JS", xp: 0.7},
            {id: 2, value:"Bootstrap", xp: 1},
            {id: 3, value:"Redux", xp: 0.5},
            {id: 4, value:"Sass", xp: 1.2},

        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages={frameworks}
                className="frameworksDisplay"
                title="frameworks"
                />

                
            </div>
        );
    }
}

export default Language;