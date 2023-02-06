import React from 'react';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="homeContent">
                <div className="content">
                    <h1>Clément THERAUD</h1>
                    <h2>Développeur FRONT-END</h2>
                    <div className="pdf">
                        <a href="./media/cv.pdf" target="_blank">Télécharger mon C.V.</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;