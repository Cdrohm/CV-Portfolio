import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li><i className="fa fa-medal"></i>
                <span>Kick Boxing</span>
                </li>
                <li><i className="fa fa-microchip"></i>
                <span>Technologie</span>
                </li>
                <li><i className="fa fa-music"></i>
                <span>Musique</span>
                </li>
                <li><i className="fa fa-palette"></i>
                <span>Arts</span>
                </li>
                <li><i className="fa fa-globe"></i>
                <span>Actualités internationales</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;