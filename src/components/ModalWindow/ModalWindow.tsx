// import React, {FC, useState} from 'react';
// import './ModalWindow.css';
//
// interface ModalWindowProps {
//     isOpen: boolean;
//     onClose: () => void;
// }
//
// const questions = [
//     {
//         question: 'Question 1',
//         options: ['Option A', 'Option B', 'Option C'],
//     },
//     {
//         question: 'Question 2',
//         options: ['Option X', 'Option Y', 'Option Z'],
//     },
//     // Додайте інші запитання та варіанти відповідей за потребою
// ];
//
// const ModalWindow: FC<ModalWindowProps> = ({ isOpen, onClose }) => {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//
//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//         } else {
//             // Якщо користувач відповів на всі запитання, можна закрити модальне вікно або здійснити інші дії
//             onClose();
//         }
//     };
//     return (
//         <>
//             {isOpen && (
//                 <div className="modal-overlay" onClick={onClose}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <span className="close-btn" onClick={onClose}>&times;</span>
//                         <div className="questionBox">
//                             <h2>{questions[currentQuestionIndex].question}</h2>
//                         </div>
//                         <div className="answersBox">
//                             <ul>
//                                 {questions[currentQuestionIndex].options.map((option, index) => (
//                                     <li key={index}>
//                                         <label>
//                                             <input type="radio" name="answer" value={option} />
//                                             {option}
//                                         </label>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div><button onClick={handleNextQuestion}>Next</button></div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export {ModalWindow};
import React, {FC, useState, useEffect} from 'react';
import './ModalWindow.css';

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Question {
    question: string;
    type: 'multipleChoice' | 'textInput';
    options?: string[];
}

const questions: Question[] = [
    {
        question: 'Question 1',
        type: 'multipleChoice',
        options: ['Option A', 'Option B', 'Option C'],
    },
    {
        question: 'Question 2',
        type: 'multipleChoice',
        options: ['Option X', 'Option Y', 'Option Z'],
    },
    {
        question: 'Question 3',
        type: 'textInput',
    },
    {
        question: 'Question 4',
        type: 'textInput',
    },
    {
        question: 'Question 5',
        type: 'textInput',
    }
];

const ModalWindow: FC<ModalWindowProps> = ({ isOpen, onClose }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        if (isOpen) {
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
            setAnswers([]);
        }
    }, [isOpen]);

    const handleNextQuestion = () => {
        setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer || ""]);

        if (currentQuestionIndex < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer(null);
        } else {
            sendAnswersToServerOrSaveLocally();
            onClose();
        }
    };

    const sendAnswersToServerOrSaveLocally = () => {
        console.log({
            answers,
        });
    };

    const renderQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];

        switch (currentQuestion.type) {
            case 'textInput':
                return (
                    <div className="questionBox">
                        <h2>{currentQuestion.question}</h2>
                        <input
                            type="text"
                            value={selectedAnswer || ''}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                    </div>
                );
            case 'multipleChoice':
                return (
                    <div className="questionBox">
                        <h2>{currentQuestion.question}</h2>
                        <ul>
                            {currentQuestion.options?.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={option}
                                            checked={selectedAnswer === option}
                                            onChange={() => setSelectedAnswer(option)}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modalHeader">
                            <h1>Fill out a short questionnaire to receive a consultation</h1>
                            <span className="close-btn" onClick={onClose}>&times;</span>
                        </div>
                        {renderQuestion()}
                        <div className="lastModalBox">
                            <button onClick={handleNextQuestion}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export {ModalWindow};

