import React, {FC, useState} from 'react';
import './InfoComponent.css'
import {ModalWindow} from "../ModalWindow/ModalWindow";

const InfoComponent:FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='infoComponentDiv'>
            <div className="houseDiv">
                <img src="/pngegg22.png" alt="House"/>
            </div>
            <div className="infoDiv">
                <h1>Do you want to sell your house and get rid of unnecessary problems?
                    You've come to the right place!</h1>
                <div className="subtitle">
                    Answer a few questions and we will get in touch with you to help solve your issue!
                </div>
                <div className="logo">
                    <img src="/logoSolo.png" alt="Logo"/>
                </div>
                <button onClick={openModal} type="button" className="myBtnConfig">Sell the house</button>
                <div className="bonuses">
                    <span>Your bonuses when filling out the questionnaire:</span>
                    <div className="bonusesDetails">
                        Free consultation and the opportunity
                        <br/>
                        to sell the house at a favorable price.
                    </div>
                </div>
            </div>
            <ModalWindow isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    );
};

export {InfoComponent};