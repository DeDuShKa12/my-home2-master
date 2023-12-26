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
            <div className="houseDiv"></div>
            <div className="infoDiv">
                <h2>Хочеш продати будинок ти зверннувся за адресою!</h2>
                <div>
                    Залиште відповідь всього на декілька запитань і ми з вами зв'яжемся
                    та допоможемо у вирішенні вашого
                    питання!
                </div>
                <button onClick={openModal} type="button" className="myBtnConfig">Заповнити анкету</button>
                <ModalWindow isOpen={isModalOpen} onClose={closeModal}/>
            </div>
        </div>
    );
};

export {InfoComponent};