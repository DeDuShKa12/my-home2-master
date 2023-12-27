import React, { FC } from 'react';
import './Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";
import { useMediaQuery } from 'react-responsive';

const Header: FC = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
    const iconSize = isSmallScreen ? 'xl' : '2xl';
    return (
        <div className='mainBoxHeader'>
            <div className="logoHeader">
                <img src="/logo.png" alt="Not House Recovery"/>
            </div>
            <div className='buttonBoxInHeader'>
                <button type="button" className="myBtnInHeader btn btn-warning">
                    <FontAwesomeIcon icon={faSquareInstagram} size={iconSize} style={{color: "#df0712",}}/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-primary">
                    <FontAwesomeIcon icon={faFacebookF} size={iconSize}/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-dark">
                    <FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#648bce",}} size={iconSize}/>
                </button>
            </div>
            <div className="compInfo">
                <span>Webuyanyhousesforcash@gmail.com</span>
                <span>+380 96 2322 323</span>
            </div>
        </div>
    );
};

export {Header};
