import React, {FC} from 'react';
import './WhySellComponent.css'
import '../styles/styles.css'

const WhySellComponent: FC = () => {
    return (
        <div className="mainBgDiv">
            <div className="mainBox">
                <div className="textAndInfoDiv">
                    <h1 className="header1">Why Sell Your Home for Cash?</h1>
                    <div className="text1">The traditional home selling process is long and arduous. Not only must you
                        acquire a real estate agent, prepare your home for sale, and negotiate with needy potential
                        buyers, but deal with closing processes and inspections, which can take weeks.</div>
                    <div className="text1 text2">When you sell your home for cash, the process can take as little as 3 days.
                        No real estate agent. No repairs. No flakey homebuyers. Just cash in your pocket and your
                        home sold.</div>
                    <div className="text1">House for cash deals are perfect when experiencing…</div>
                    <div>
                        <ul>
                            <li className="text1">Divorce</li>
                            <li className="text1">Short sales</li>
                            <li className="text1">Foreclosures</li>
                            <li className="text1">Job relocation</li>
                            <li className="text1">Damaged home</li>
                            <li className="text1">Inherited home</li>
                            <li className="text1">Death in the family</li>
                            <li className="text1">Anything that would make you want to sell your home as-is</li>
                        </ul>
                    </div>
                    <button className="myBtnConfigs">Get my cash offer</button>
                </div>
                <div className="imgDiv">
                    <img src="https://vancouverredevelopment.com/wp-content/uploads/2023/01/5445-min.jpg" alt="IMG"/>
                </div>
            </div>
        </div>
    );
};

export {WhySellComponent};