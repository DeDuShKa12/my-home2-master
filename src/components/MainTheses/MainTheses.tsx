import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield, faFileExcel, faHouseCircleCheck, faSackDollar} from "@fortawesome/free-solid-svg-icons";
import '../styles/styles.css'
import './MainTheses.css'

const MainTheses:FC = () => {
    return (
        <div className="mainBgDiv">
            <div className="mainBox">
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faSackDollar} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="header2">Cash Offer</h1>
                    <div className="text1">
                        Why wait a month to close the deal when you can get an offer today?
                    </div>
                </div>
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faHouseCircleCheck} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="header2">Sell As-Is</h1>
                    <div className="text1">
                        No need to invest in fixing up or remodeling your home just to sell it.
                    </div>
                </div>
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faFileExcel} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="header2">No Closing Costs</h1>
                    <div className="text1">
                        We cover all costs and fees, providing you with peace of mind.
                    </div>
                </div>
                <div className="thesis">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={faBuildingShield} size="3x" style={{color: "#FFD43B",}} />
                    </div>
                    <h1 className="header2">Guarantee With No Risk Involved.</h1>
                    <div className="text1">
                        When we buy your home, you’re guaranteed your cash.
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MainTheses};