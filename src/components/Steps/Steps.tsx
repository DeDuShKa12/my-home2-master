import React, { FC } from 'react';
import './Steps.css';
import '../styles/styles.css'

const Steps: FC = () => {
    const startAnimation = () => {
        const steps = document.querySelectorAll<HTMLElement>('.step');

        steps.forEach((step, index) => {
            const delay = index * 500;
            setTimeout(() => {
                if (index % 2 !== 0) {
                    step.classList.add('visible1');
                } else {
                    step.classList.add('visible');
                }
            }, delay);
        });
    };

    window.addEventListener('scroll', function() {
        const elementId = 'steps';
        const element = document.getElementById(elementId);
        if (element) {
            const elementTopPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTopPosition <= windowHeight * 0.60 && elementTopPosition >= -element.offsetHeight) {
                startAnimation()
            }
        }
    });

    return (
        <div className="mainBgDiv">
            <div id="steps" className="mainBox dirColumn">
                <div className="headerDiv">
                    <h1 className="header1">How It Works</h1>
                </div>
                <div className='steps-container'>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 1</div>
                            <img src="https://storage.cloud.google.com/image-stor-my-home3942/quest.png" alt="Logo"/>
                        </div>
                        <h1 className="header1">Fill Out The Form</h1>
                        <div className="header2">
                            You only need to answer 5 questions to help us understand your situation
                            and get in touch with you more effectively.
                        </div>
                    </div>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 2</div>
                            <img src="https://storage.cloud.google.com/image-stor-my-home3942/AnalysisOfferIcon.png" alt="Logo"/>
                        </div>
                        <h1 className="header1">Property Analysis & Cash Offer</h1>
                        <div className="header2">
                            We'll be in touch to offer an analysis of your property and a cash offer "as is," with
                            no real estate agents required!
                        </div>
                    </div>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 3</div>
                            <img src="https://storage.cloud.google.com/image-stor-my-home3942/logoSolo.png" alt="Logo"/>
                        </div>
                        <h1 className="header1">Close Deal & Cash Payment</h1>
                        <div className="header2">
                            We provide cash for your home and have the ability to close the deal in as few as 5 days.
                            Additionally, we will deposit earnest money and take care of all closing costs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Steps};
