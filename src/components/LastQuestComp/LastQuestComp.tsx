import React, {FC} from 'react';
import './LastQuestComp.css'
import '../styles/styles.css'
import {QuestionsComp} from "../QuestionsComp/QuestionsComp";

const LastQuestComp: FC = () => {
    return (
        <div className='mainBgDiv'>
            <div className='mainBox'>
                <div className="aboutComp">
                    <div className="contactsDiv">
                        <h1 className="header1">
                            We Buy Houses At Any Price & Any Condition!
                        </h1>
                        <p className="text1">
                            Contact Us Today
                        </p>
                        <a className="header1 text2" href="tel:+13607183727">+1(360) 718 37 27</a>
                    </div>
                    <QuestionsComp/>
                </div>
            </div>
        </div>
    );
};

export {LastQuestComp};