import React, {FC, useState} from 'react';
import './MainPage.css'
import {Steps} from "../../components/Steps/Steps";
import {InfoComponent} from "../../components/InfoComponent/InfoComponent";
import {Video} from "../../components/Video/Video";
import {LastInfoBox} from "../../components/LastInfoBox/LastInfoBox";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {WhySellComponent} from "../../components/WhySellComponent/WhySellComponent";

const MainPage: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <div className="MainPageBox">
                <ModalWindow isOpen={isModalOpen} onClose={closeModal}/>
                <InfoComponent openModal={openModal}/>
                <WhySellComponent/>
                <Steps/>
                <Video/>
            </div>
            <LastInfoBox/>
        </div>
    );
};

export {MainPage};