import React, { FC, useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import {ModalPhoneEmail} from "../ModalPhoneEmail/ModalPhoneEmail";

const Header: FC = () => {
    const handleScrollToMain = () => {
        const stepsElement = document.getElementById('main');
        if (stepsElement) {
            const offset = -50;
            const elementPosition = stepsElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/n_h_recovery/', '_blank');
    };

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/people/Not-House-Recovery/100085688124680/', '_blank');
    };

    const handleTwitterClick = () => {
        window.open('https://twitter.com/N_H_Recovery', '_blank');
    };
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
                <img onClick={handleScrollToMain}
                     src="https://storage.googleapis.com/image-stor-my-home3942/LogoAndName.png"
                     alt="Life And Home Recovery"/>
            </div>
            <div className='buttonBoxInHeader'>
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
            <div className="compInfo">
                {isSmallScreen ? (
                    <button className="btn-show-modal" onClick={openModal}>
                        Contacts
                    </button>
                ) : (
                    <>
                        <a href="mailto:webuyanyhousesforcash@gmail.com">webuyanyhousesforcash@gmail.com</a>
                        <a href="tel:+15032266340">+1 (503) 226-6340</a>
                    </>
                )}
            </div>
            {isModalOpen && <ModalPhoneEmail onClose={closeModal}/>}
        </div>
    );
};

export {Header};
