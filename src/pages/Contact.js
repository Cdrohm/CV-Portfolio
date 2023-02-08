import React from 'react';
import Nav from '../components/Nav';
//import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Nav />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Avranches</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;