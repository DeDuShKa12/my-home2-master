import React, {FC} from 'react';
import {QuestionsComp} from "../QuestionsComp/QuestionsComp";
import './InfoComponent.css'
import '../styles/styles.css'


const InfoComponent:FC = () => {
    return (
        <div className='mainBgDiv'>
            <div className="infoDiv">
                <h1 className="header1">Get Cash For Your House</h1>
                <div className="questAndText">
                    <div className="text1">
                        We buy houses in Washington state as well as Oregon. Regardless of the condition of the home,
                        neighbors, or debt, or financial status, the cash sale process is fast and easy
                    </div>
                    <div className="questDiv">
                        <QuestionsComp/>
                    </div>
                </div>
                <button type="button" className="myBtnConfigs">How It Works</button>
                <div className="houseDiv">
                    <img src="/pngegg22.png" alt="House"/>
                </div>
            </div>
        </div>
    );
};

export {InfoComponent};