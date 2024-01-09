import React, { FC } from 'react';
import {faFacebookF, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './LastInfoBox.css';

const LastInfoBox: FC = () => {
    return (
        <div className='lastInfoBox'>
            <div className='buttonBox'>
                <button type="button" className="myBtn btn btn-warning">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#df0712"}} className="lastIcon"/>
                </button>
                <button type="button" className="myBtn btn btn-primary">
                    <FontAwesomeIcon icon={faFacebookF} className="lastIcon"/>
                </button>
                <button type="button" className="myBtn btn btn-dark">
                    <FontAwesomeIcon icon={faTwitterSquare} style={{color: "#648bce"}} className="lastIcon"/>
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
