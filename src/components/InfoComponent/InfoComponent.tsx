import React, {FC} from 'react';
import './InfoComponent.css'

interface InfoComponentProps {
    openModal: () => void;
}
const InfoComponent:FC<InfoComponentProps> = ({openModal}) => {

    return (
        <div className='infoComponentDiv'>

            <div className="infoDiv">
                <h1>Do you want to sell your house and get rid of unnecessary problems?
                    You've come to the right place!</h1>
                <div className="subtitle">
                    Answer a few questions and we will get in touch with you to help solve your issue!
                </div>
                <div className="logo">
                    <img src="/logoSolo.png" alt="Logo"/>
                </div>
                <button onClick={openModal} type="button" className="myBtnConfig">Sell the house</button>
                <div className="bonuses">
                    <h4>Your bonuses when filling out the questionnaire:</h4>
                    <div className="bonusesDetails">
                        Free consultation and the opportunity
                        <br/>
                        to sell the house at a favorable price.
                    </div>
                </div>
                <div className="houseDiv">
                    <img src="/pngegg22.png" alt="House"/>
                </div>
            </div>
        </div>
    );
};

export {InfoComponent};