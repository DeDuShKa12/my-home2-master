import React, {FC} from 'react';
import './WhySellComponent.css'
import '../styles/styles.css'

const WhySellComponent: FC = () => {
    const handleScrollToQuest = () => {
        const stepsElement = document.getElementById('quest');
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
    return (
        <div id="learnMore" className="mainBgDiv">
            <div className="mainBox">
                <div className="textAndInfoDiv">
                    <h1 className="header1">Why Is This The Best Way To Sell For You?</h1>
                    <div className="text1">Selling a home the traditional way can be a time-consuming and laborious
                        process. From finding a real estate agent to preparing your home for sale, dealing with
                        potential buyers, and navigating through the closing processes and inspections, the entire
                        ordeal can drag on for weeks.</div>
                    <div className="text1 text2">However, when you opt to sell your home for cash, the entire process
                        can be completed in as little as 3 days, without the need for a real estate agent, repairs,
                        or dealing with indecisive homebuyers. Instead, you receive cash for your property, and your
                        home is sold.</div>
                    <div className="text1">Cash deals for houses are particularly beneficial in situations such as
                        divorce, short sales, foreclosures, job relocation, when you have a damaged or inherited home,
                        or are dealing with the loss of a family member—essentially, in any circumstance that would
                        lead you to sell your home as it is.</div>
                    <button onClick={handleScrollToQuest} className="myBtnConfigs">Get my cash offer</button>
                </div>
                <div className="imgDiv">
                    <img src="https://storage.googleapis.com/image-stor-my-home3942/Family.png" alt="IMG"/>
                </div>
            </div>
        </div>
    );
};

export {WhySellComponent};