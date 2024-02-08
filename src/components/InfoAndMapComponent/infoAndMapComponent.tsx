import React, {FC, useEffect} from 'react';
import '../styles/styles.css'
import './InfoAndMapComponent.css'
import Cookies from "universal-cookie";

const InfoAndMapComponent: FC = () => {
    useEffect(() => {
        const cookies = new Cookies();
        cookies.set('cookieName', 'cookieValue', { sameSite: 'none', secure: true });
    }, []);
    const handleScrollToQuest = () => {
        const stepsElement = document.getElementById('quest');
        if (stepsElement) {
            const offset = -50;
            const elementPosition = stepsElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="mainBgDiv">
            <div className="mainBox generalBox">
                <div className="upperDiv">
                    <div className="infoAboutLocationDiv">
                        <h1 className="header1">We Buy Real Estate In WASHINGTON And OREGON.</h1>
                        <div className="text1">We’re interested in buying properties located throughout the
                            Vancouver metropolitan area.
                        </div>
                        <div className="text1 text2">We have bought homes in…</div>
                        <div className="text1">Portland, Tigard, Beaverton, Gresham, Hillsboro, Wilsonville, Canby,
                            Clark County, Columbia County, Cowlitz County, Multnomah County, Skamania County,
                            and Wahkiakum County.
                        </div>
                        <button onClick={handleScrollToQuest} className="myBtnConfigs btnWidth">Get my cash offer</button>
                    </div>
                    <div className="mapDiv">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="400"
                            style={{border: 0}}
                            src={`https://www.google.com/maps/embed/v1/place?q=Portland&language=en&key=AIzaSyCooBeIpAa6tAr1rHHg6mNUkfQKZk6LFx4`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="lowerDiv">
                    <div className="imgDiv">
                        <img src="https://storage.googleapis.com/image-stor-my-home3942/Man.png"
                             alt="img"/>
                    </div>
                    <div className="infoAboutLocationDiv">
                        <h1 className="header1">Meeting With Our Agent</h1>
                        <div className="text1">We look forward to meeting with our agent at your earliest convenience.
                        </div>
                        <div className="text1 text2">Simply fill out the form, and we will handle the rest.</div>
                        <div className="text1"> Rest assured, your personal information is strictly confidential.
                            Our primary objective is to assist you in positively transforming your life, and we are
                            always here to support you
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {InfoAndMapComponent};