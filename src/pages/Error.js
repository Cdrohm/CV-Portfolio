import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <div className="errorContent">
                <p>Oops! Page doesn't exit...!</p>
                <NavLink exact to ="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;