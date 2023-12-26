import React, {FC, useEffect, useState} from 'react';
import './Steps.css';

const Steps: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const targetPosition = window.innerHeight * 0.30;

            if (window.scrollY >= targetPosition) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible && !animationCompleted) {
            const steps = document.querySelectorAll<HTMLElement>('.step');

            steps.forEach((step, index) => {
                setTimeout(() => {
                    if (index % 2 !== 0) {
                        step.classList.add('visible1');
                    } else {
                        step.classList.add('visible');
                    }
                    console.log(index);
                }, index * 500);
            });

            setAnimationCompleted(true); // Позначте, що анімація вже виконана
        }
    }, [isVisible, animationCompleted]);

    return (
        <div className={`steps-container ${isVisible ? 'visible' : ''}`}>
            <div className="step">
                <div className="numberDiv">1</div>
                <div>Заповнюєте анкету</div>
            </div>
            <div className="step">
                <div className="numberDiv">2</div>
                <div>Отримав зворотній зв'язок</div>
            </div>
            <div className="step">
                <div className="numberDiv">3</div>
                <div>Домовився про зустріч</div>
            </div>
            <div className="step">
                <div className="numberDiv">4</div>
                <div>Заповнив документи</div>
            </div>
            <div className="step">
                <div className="numberDiv">5</div>
                <div>Отримав гроші</div>
            </div>
            <div className="step">
                <div className="numberDiv">6</div>
                <div>Кінець</div>
            </div>
        </div>
    );
};

export {Steps};
