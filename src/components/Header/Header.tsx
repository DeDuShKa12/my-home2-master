import React, {FC} from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

const Header: FC = () => {
    return (
        <div className='mainBoxHeader'>
            <div className="logoHeader">
                <img src="/logo.png" alt="Not House Recovery"/>
            </div>
            <div className='buttonBoxInHeader'>
                <button type="button" className="myBtnInHeader btn btn-warning">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#df0712"}} className="icon"/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-primary">
                    <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-dark">
                    <FontAwesomeIcon icon={faTwitterSquare} style={{color: "#648bce"}} className="icon"/>
                </button>
            </div>
            <div className="compInfo">
                <a href="mailto:webuyanyhousesforcash@gmail.com">Webuyanyhousesforcash@gmail.com</a>
                <a href="tel:+380962322323">+380 96 2322 323</a>
            </div>
        </div>
    );
};

export {Header};
