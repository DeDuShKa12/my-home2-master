import React, {FC} from 'react';
import './MainPage.css'
import {Steps} from "../../components/Steps/Steps";
import {InfoComponent} from "../../components/InfoComponent/InfoComponent";
import {Footer} from "../../components/Footer/Footer";
import {WhySellComponent} from "../../components/WhySellComponent/WhySellComponent";
import {InfoAndMapComponent} from "../../components/InfoAndMapComponent/infoAndMapComponent";
import {MainTheses} from "../../components/MainTheses/MainTheses";
import {LastQuestComp} from "../../components/LastQuestComp/LastQuestComp";

const MainPage: FC = () => {
    return (
        <>
            <div className="MainPageBox">
                <InfoComponent/>
                <MainTheses/>
                <WhySellComponent/>
                <Steps/>
                <InfoAndMapComponent/>
                <LastQuestComp/>
            </div>
            <Footer/>
        </>
    );
};

export {MainPage};