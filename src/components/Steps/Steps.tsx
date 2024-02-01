import React, { FC, useEffect, useState } from 'react';
import './Steps.css';
import '../styles/styles.css'

const Steps: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                console.log(index);
            }, delay);
        });
    };

    useEffect(() => {
        function handleScroll() {
            const targetPosition = window.innerHeight * 0.15;

            if (window.scrollY >= targetPosition) {
                setIsVisible(true);
                startAnimation();
                window.removeEventListener('scroll', handleScroll);
            }
        }

        const isUserAlreadyScrolled = window.scrollY >= window.innerHeight * 0.15;
        if (isUserAlreadyScrolled) {
            setIsVisible(true);
            startAnimation();
        } else {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mainBgDiv">
            <div className="mainBox dirColumn">
                <div className="headerDiv">
                    <h1 className="header1">How It Works</h1>
                </div>
                <div className={`steps-container ${isVisible ? 'visible' : ''}`}>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 1</div>
                            <img src="/quest.png" alt="Logo"/>
                        </div>
                        <h1>Fill Out The Form</h1>
                        <div>
                            You only need to answer 5 questions to help us understand your situation
                            and get in touch with you more effectively.
                        </div>
                    </div>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 2</div>
                            <img src="/AnalysisOfferIcon.png" alt="Logo"/>
                        </div>
                        <h1>Property Analysis & Cash Offer</h1>
                        <div>
                            We'll be in touch to offer an analysis of your property and a cash offer "as is," with
                            no real estate agents required!
                        </div>
                    </div>
                    <div className="step">
                        <div className="numberAndLogoDiv">
                            <div className="numberDiv">Step 3</div>
                            <img src="/logoSolo.png" alt="Logo"/>
                        </div>
                        <h1>Close Deal & Cash Payment</h1>
                        <div>
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
