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
                        <div className="text1 text2">We have bought and sold homes in…</div>
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
                            src={`https://www.google.com/maps/embed/v1/place?q=Portland&key=AIzaSyCooBeIpAa6tAr1rHHg6mNUkfQKZk6LFx4`}
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
                        <h1 className="header1">Meet Jesse & Anna Cheng</h1>
                        <div className="text1">Jesse and Anna have been buying and selling homes in
                            the Vancouver area for years.
                        </div>
                        <div className="text1 text2">They care deeply about the Vancouver community and have lived and
                            worked in the very same neighborhoods where they buy and sell homes.</div>
                        <div className="text1">Anna works as a nurse at a local hospital, and Jesse is available on
                            your schedule to come take a look at your property. Together, they’ll work hard to
                            make sure you’re taken care of and provided with a fair cash offer for your home.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {InfoAndMapComponent};