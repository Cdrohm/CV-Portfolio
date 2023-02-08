import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    {/* profil*/}
                    <img src="../media/profil.jpg" alt="profil-img" />
                    <h3>Clément THERAUD</h3>
                    <h4>Développeur FRONT-END</h4>
                </div>
            </div>
            
            {/* menu nav */}
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink end to="/"className={(navActive) => (navActive.isActive ? "navActive" : 'none')} >
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/competences" className={(navActive) => (navActive.isActive ? "navActive" : 'none')}>
                            <i className="fas fa-book"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/portfolio" className={(navActive) => (navActive.isActive ? "navActive" : 'none')}>
                            <i className="fas fa-star"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/contact" className={(navActive) => (navActive.isActive ? "navActive" : 'none')}>
                            <i className="fas fa-envelope"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* social network */}
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="http://www.linkedin.com/in/clement-theraud" target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/Cdrohm" target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>

                {/* signature */}
                <div className="signature">
                    <p>Theraud Clement - 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;