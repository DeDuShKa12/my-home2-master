import React, {FC} from 'react';
import './LastQuestComp.css'
import {QuestionsComp} from "../QuestionsComp/QuestionsComp";

const LastQuestComp: FC = () => {
    return (
        <div className='videoComponentDiv'>
            <div className='videoAndInfoBox'>
                <div className="aboutComp">
                    <h1>
                        We Buy Houses At Any Price & Any Condition!
                    </h1>
                    <div>

                    </div>
                </div>
                <div>
                    <QuestionsComp/>
                </div>
            </div>
        </div>
    );
};

export {LastQuestComp};