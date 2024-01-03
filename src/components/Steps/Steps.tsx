// import React, {FC, useEffect, useState} from 'react';
// import './Steps.css';
//
// const Steps: FC = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [animationCompleted, setAnimationCompleted] = useState(false);
//
//     useEffect(() => {
//         function handleScroll() {
//             const targetPosition = window.innerHeight * 0.30;
//
//             if (window.scrollY >= targetPosition) {
//                 setIsVisible(true);
//                 window.removeEventListener('scroll', handleScroll);
//             }
//         }
//
//         window.addEventListener('scroll', handleScroll);
//
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     useEffect(() => {
//         if (isVisible && !animationCompleted) {
//             const steps = document.querySelectorAll<HTMLElement>('.step');
//
//             steps.forEach((step, index) => {
//                 setTimeout(() => {
//                     if (index % 2 !== 0) {
//                         step.classList.add('visible1');
//                     } else {
//                         step.classList.add('visible');
//                     }
//                     console.log(index);
//                 }, index * 500);
//             });
//
//             setAnimationCompleted(true); // Позначте, що анімація вже виконана
//         }
//     }, [isVisible, animationCompleted]);
//
//     return (
//         <div className={`steps-container ${isVisible ? 'visible' : ''}`}>
//             <div className="step">
//                 <div className="numberAndLogoDiv">
//                     <div className="numberDiv">Step 1</div>
//                     <img src="/logoSolo.png" alt="Logo"/>
//                 </div>
//                 <h1>Fill Out A Short Questionnaire</h1>
//                 <div>
//                     Provide answers to just 5 questions so that we can better understand
//                     your situation and get in touch with you.
//                 </div>
//             </div>
//             <div className="step">
//                 <div className="numberAndLogoDiv">
//                     <div className="numberDiv">Step 2</div>
//                     <img src="/logoSolo.png" alt="Logo"/>
//                 </div>
//                 <h1>Property Analysis & No Obligation Offer</h1>
//                 <div>
//                     We will reach out to you and offer an analysis of your options, as well as a cash offer "as is."
//                     No real estate agents needed!
//                 </div>
//             </div>
//             <div className="step">
//                 <div className="numberAndLogoDiv">
//                     <div className="numberDiv">Step 3</div>
//                         <img src="/logoSolo.png" alt="Logo"/>
//                 </div>
//                 <h1>Close Deal & Cash Payment</h1>
//                 <div>
//                     We offer cash for your home and can close the deal in as little as 3 days. We'll deposit $10,000
//                     earnest money and cover all closing costs.
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export {Steps};
import React, { FC, useEffect, useState } from 'react';
import './Steps.css';

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
            const targetPosition = window.innerHeight * 0.30;

            if (window.scrollY >= targetPosition) {
                setIsVisible(true);
                startAnimation();
                window.removeEventListener('scroll', handleScroll);
            }
        }

        // Визначте, чи користувач вже прокрутив сторінку при завантаженні
        const isUserAlreadyScrolled = window.scrollY >= window.innerHeight * 0.30;
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
        <div className={`steps-container ${isVisible ? 'visible' : ''}`}>
            <div className="step">
                <div className="numberAndLogoDiv">
                    <div className="numberDiv">Step 1</div>
                    <img src="/logoSolo.png" alt="Logo" />
                </div>
                <h1>Fill Out A Short Questionnaire</h1>
                <div>
                    Provide answers to just 5 questions so that we can better understand your situation and get in touch with you.
                </div>
            </div>
            <div className="step">
                <div className="numberAndLogoDiv">
                    <div className="numberDiv">Step 2</div>
                    <img src="/logoSolo.png" alt="Logo" />
                </div>
                <h1>Property Analysis & No Obligation Offer</h1>
                <div>
                    We will reach out to you and offer an analysis of your options, as well as a cash offer "as is." No real estate agents needed!
                </div>
            </div>
            <div className="step">
                <div className="numberAndLogoDiv">
                    <div className="numberDiv">Step 3</div>
                    <img src="/logoSolo.png" alt="Logo" />
                </div>
                <h1>Close Deal & Cash Payment</h1>
                <div>
                    We offer cash for your home and can close the deal in as little as 3 days. We'll deposit $10,000 earnest money and cover all closing costs.
                </div>
            </div>
        </div>
    );
};

export { Steps };
