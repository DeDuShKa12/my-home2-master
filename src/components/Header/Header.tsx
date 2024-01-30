import React, { FC, useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import {ModalPhoneEmail} from "../ModalPhoneEmail/ModalPhoneEmail";

const Header: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mainBoxHeader">
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
                {isSmallScreen ? (
                    <button className="btn-show-modal" onClick={openModal}>
                        Contacts
                    </button>
                ) : (
                    <>
                        <a href="mailto:webuyanyhousesforcash@gmail.com">webuyanyhousesforcash@gmail.com</a>
                        <a href="tel:+380962322323">+380 96 2322 323</a>
                    </>
                )}
            </div>
            {isModalOpen && <ModalPhoneEmail onClose={closeModal} />}
        </div>
    );
};

export { Header };
