import React, {FC} from 'react';
import '../styles/styles.css'
import './InfoAndMapComponent.css'

const InfoAndMapComponent: FC = () => {
    return (
        <div className="mainBgDiv">
            <div className="mainBox generalBox">
                <div className="upperDiv">
                    <div className="infoAboutLocationDiv">
                        <h1 className="header1">We Buy Houses in the Entire PORTLAND Metro Area</h1>
                        <div className="text1">We’re interested in buying properties located throughout the
                            Vancouver metropolitan area.
                        </div>
                        <div className="text1 text2">We have bought and sold homes in…</div>
                        <div className="text1">Portland, Tigard, Beaverton, Gresham, Hillsboro, Wilsonville, Canby,
                            Woodburn, Sandy, Aloha, Troutdale, Molalla, Oregon City, Vancouver, Ridgefield, Washougal,
                            Battle Ground, Camas, Salmon Creek, Woodland, Kelso, Longview, Clark County, Cowlitz County,
                            Many more cities!
                        </div>
                        <button className="myBtnConfigs btnWidth">Get my cash offer</button>
                    </div>
                    <div className="mapDiv">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="400"
                            style={{border: 0}}
                            src="https://www.google.com/maps/embed/v1/place?q=Portland"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="lowerDiv">
                    <div className="imgDiv">
                        <img src="https://vancouverredevelopment.com/wp-content/uploads/2023/01/Jesse-Anna-Cheng.jpg"
                             alt="IMG"/>
                    </div>
                    <div className="infoAboutLocationDiv">
                        <h1 className="header1">Meet Jesse & Anna Cheng</h1>
                        <div className="text1">Jesse and Anna have been buying and selling homes in
                            the Vancouver area for years.
                        </div>
                        <div className="text1">They care deeply about the Vancouver community and have lived and
                            worked in the very same neighborhoods where they buy and sell homes.</div>
                        <div className="text1">Anna works as a nurse at a local hospital, and Jesse is available on
                            your schedule to come take a look at your property. Together, they’ll work hard to
                            make sure you’re taken care of and provided with a fair cash offer for your home.
                        </div>
                        <button className="myBtnConfigs btnWidth">Get my cash offer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {InfoAndMapComponent};