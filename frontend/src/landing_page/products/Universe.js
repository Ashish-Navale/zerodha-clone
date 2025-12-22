import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">The Zerodha Universe</h1>
            <p className="text-center">
                Extend your trading and investment experience even further with our partner platforms
            </p>

            <div className="row text-center mt-4">

                <div className="col-4 p-4">
                    <img src="media/images/smallcaseLogo.png" className="universe-logo" />
                    <p className="text-muted">Thematic investment platforms</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/streakLogo.png" className="universe-logo" />
                    <p className="text-muted">Algo & strategy platform</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/sensibullLogo.svg" className="universe-logo" />
                    <p className="text-muted">Options trading platform</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/zerodhaFundhouse.png" className="universe-logo" />
                    <p className="text-muted">Asset management</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/goldenpiLogo.png" className="universe-logo" />
                    <p className="text-muted">Bonds trading platforms</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/dittoLogo.png" className="universe-logo" />
                    <p className="text-muted">Insurance</p>
                </div>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto" }}>Signup Now</button>
            </div>
            
        </div>
    );
}

export default Universe;
