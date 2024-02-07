import React, { FC } from 'react';
import {faFacebookF, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './LastInfoBox.css';

const LastInfoBox: FC = () => {
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/n_h_recovery/', '_blank');
    };

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/people/Not-House-Recovery/100085688124680/', '_blank');
    };

    const handleTwitterClick = () => {
        window.open('https://twitter.com/N_H_Recovery', '_blank');
    };
    return (
        <div className='lastInfoBox'>
            <div className='buttonBox'>
                <button type="button" className="myBtnInHeader btn btn-warning" onClick={handleInstagramClick}>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#df0712"}} className="icon"/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-primary" onClick={handleFacebookClick}>
                    <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-dark" onClick={handleTwitterClick}>
                    <FontAwesomeIcon icon={faTwitterSquare} style={{color: "#648bce"}} className="icon"/>
                </button>
            </div>
            <div className="lastCompInfo">
                <a href="mailto:webuyanyhousesforcash@gmail.com">webuyanyhousesforcash@gmail.com</a>
                <a href="tel:+380962322323">+380 96 2322 323</a>
            </div>
        </div>
    );
};

export {LastInfoBox};
