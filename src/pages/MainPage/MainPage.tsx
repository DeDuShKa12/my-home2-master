import React, {FC} from 'react';
import './MainPage.css'
import {Steps} from "../../components/Steps/Steps";
import {InfoComponent} from "../../components/InfoComponent/InfoComponent";
import {Video} from "../../components/Video/Video";
import {LastInfoBox} from "../../components/LastInfoBox/LastInfoBox";

const MainPage: FC = () => {
    return (
        <div>
            <div className="MainPageBox">
                <InfoComponent/>
                <Steps/>
                <Video/>
            </div>
            <LastInfoBox/>
        </div>
    );
};

export {MainPage};