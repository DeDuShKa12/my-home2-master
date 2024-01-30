import React, {FC} from 'react';
import '../styles/styles.css'
import './MainTheses.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield, faFileExcel, faHouseCircleCheck, faSackDollar} from "@fortawesome/free-solid-svg-icons";

const MainTheses:FC = () => {
    return (
        <div className="mainBgDiv">
            <div className="mainBox">
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faSackDollar} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="thesisHeader">Cash Offer</h1>
                    <div className="text1">
                        No waiting on buyers to line up loans and negotiate price
                    </div>
                </div>
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faHouseCircleCheck} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="thesisHeader">Sell As-Is</h1>
                    <div className="text1">
                        No fixing up and remodeling your home just to sell it
                    </div>
                </div>
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faFileExcel} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="thesisHeader">No Closing Costs</h1>
                    <div className="text1">
                        We take care of all costs and fees so you get a mental piece
                    </div>
                </div>
                <div className="thesis">
                    <div className="imgDiv">
                        <FontAwesomeIcon icon={faBuildingShield} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="thesisHeader">No-Risk Closing</h1>
                    <div className="text1">
                        When we buy your home, you’re guaranteed your cash
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MainTheses};