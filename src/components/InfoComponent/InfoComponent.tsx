import React, {FC} from 'react';
import {QuestionsComp} from "../QuestionsComp/QuestionsComp";
import './InfoComponent.css'
import '../styles/styles.css'


const InfoComponent:FC = () => {
    const handleScrollToSteps = () => {
        const stepsElement = document.getElementById('steps');
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
    const handleScrollToLearnMore = () => {
        const stepsElement = document.getElementById('learnMore');
        if (stepsElement) {
            const offset = -50;
            const elementPosition = stepsElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div id="main" className='mainBgDiv'>
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
                    <button type="button" className="myBtnConfigs customBTN" onClick={handleScrollToSteps}>How It Works</button>
                    <button type="button" className="myBtnConfigs customBTN" onClick={handleScrollToLearnMore}>Learn More</button>
                </div>
                <div className="houseDiv">
                <img src="https://drive.google.com/uc?id=18uqX4rFJVF5afnlMq7xlz5Zw-F6-Bsut" alt="House"/>
                </div>
            </div>
        </div>
    );
};

export {InfoComponent};