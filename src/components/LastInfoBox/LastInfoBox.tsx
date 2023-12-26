import React, { FC } from 'react';
import {faFacebookF, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './LastInfoBox.css';
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";

const LastInfoBox: FC = () => {
    return (
        <div className='lastInfoBox'>
            <div className='buttonBox'>
                <button type="button" className="myBtn btn btn-warning">
                    <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{color: "#df0712",}} />
                </button>
                <button type="button" className="myBtn btn btn-primary">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button type="button" className="myBtn btn btn-dark">
                    <FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#648bce",}} size="xl"/>
                </button>
            </div>
            <div>email</div>
        </div>
    );
};

export { LastInfoBox };
