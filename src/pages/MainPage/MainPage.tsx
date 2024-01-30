import React, {FC, useState} from 'react';
import './MainPage.css'
import {Steps} from "../../components/Steps/Steps";
import {InfoComponent} from "../../components/InfoComponent/InfoComponent";
import {LastInfoBox} from "../../components/LastInfoBox/LastInfoBox";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {WhySellComponent} from "../../components/WhySellComponent/WhySellComponent";
import {InfoAndMapComponent} from "../../components/InfoAndMapComponent/infoAndMapComponent";
import {MainTheses} from "../../components/MainTheses/MainTheses";

const MainPage: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <div className="MainPageBox">
                <ModalWindow isOpen={isModalOpen} onClose={closeModal}/>
                <InfoComponent openModal={openModal}/>
                <MainTheses/>
                <WhySellComponent/>
                <Steps/>
                <InfoAndMapComponent/>
            </div>
            <LastInfoBox/>
        </>
    );
};

export {MainPage};