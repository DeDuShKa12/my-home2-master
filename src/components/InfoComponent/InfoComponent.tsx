import React, {FC} from 'react';
import {QuestionsComp} from "../QuestionsComp/QuestionsComp";
import './InfoComponent.css'
import '../styles/styles.css'


const InfoComponent:FC = () => {
    return (
        <div className='mainBgDiv'>
            <div className="infoDiv">
                <div className="questAndText">
                    <div className="headerTxt">
                        <h1 className="customHeader">Get Cash For Your House</h1>
                        <div className="customTxt">
                            We buy houses in Washington state as well as Oregon. Regardless of the condition of the
                            home,
                            neighbors, or debt, or financial status, the cash sale process is fast and easy
                        </div>
                    </div>
                    <QuestionsComp/>
                </div>
                <div className="btnDiv">
                    <button type="button" className="myBtnConfigs">How It Works</button>
                </div>
                <div className="houseDiv">
                <img src="/pngegg22.png" alt="House"/>
                </div>
            </div>
        </div>
    );
};

export {InfoComponent};