import React from 'react';

const Experience = () => {
    return (
        <div className="experiences">
            <h3>Expériences</h3>
            <div className="xp-1">
            <h4>Formation Front-End développer</h4>
                <h5>2021-2022</h5>
                <p>Suivi de la formation développeur d'applications REACT JS <br />
                    14 projets validés (sites vitrine, application bancaire, application interne, convertions jQuery, maquettes) <br />
                    HTML CSS SASS Bootstrap D3<br />
                    Docker MongoDB <br />
                    React JS Redux JsToken Jest
                </p>
                
            </div>
            <div className="xp-2">
            <h4>Gérant Association Farbi'K'sons</h4>
                <h5>2012-2018</h5>
                <p>Création et gestion dune association loi 1901 ayant pour but 
                    de promouvoir les différents arts et cultures urbaines. <br />

                    Interventions sur le secteur national, auprès de public divers 
                    autour de différents ateliers créés et gérés (enfants / 
                    adolescents / public en situation de handicap) <br />

                    Initiation au DJ’ing / MAO / vidéo montage</p>
            </div>
        </div>
    );
};

export default Experience;