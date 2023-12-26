import React, { FC } from 'react';
import './Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";

const Header: FC = () => {
    return (
        <div className='mainBoxHeader'>
            <div>Logo Name</div>
            <div className='buttonBoxInHeader'>
                <button type="button" className="myBtnInHeader btn btn-warning">
                    <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{color: "#df0712",}}/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-primary">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </button>
                <button type="button" className="myBtnInHeader btn btn-dark">
                    <FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#648bce",}} size="xl"/>
                </button>
            </div>
            <div>Tel</div>
        </div>
    );
};

export {Header};
