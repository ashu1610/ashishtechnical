import React from 'react';
import './Packages.css';

function Packages() {
    return (
        <div className='packages-wrapper'>
            <div className='container'>
                <div className='row align-items-center mb-5'>
                    <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                        <img src='images/planner.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7 offset-lg-1 mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Trip Planner</h1>
                            <p className='package-text'>
                                Executive Planner will help you to find sutable place and best package for you to visit, and provide you the package according to your need.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mb-5 flex-sm-row-reverse'>
                    <div className='col-sm-12 col-lg-4 offset-lg-1 mb-5 mb-lg-0'>
                        <img src='images/securenet.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7  mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Safe Internet</h1>
                            <p className='package-text'>
                                All Hotel and resourt will provide secure netwrok to connect, Safe Internet Secure Information.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mb-5'>
                    <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                        <img src='images/plain.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7 offset-lg-1 mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Flight Booking</h1>
                            <p className='package-text'>
                                Provide you a new expirence of flight booking for you and your family.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mb-5 flex-sm-row-reverse'>
                    <div className='col-sm-12 col-lg-4 offset-lg-1 mb-5 mb-lg-0'>
                        <img src='images/hotel.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7  mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Hotel Booking</h1>
                            <p className='package-text'>
                                Hotel and resourt available all across the globe, put your fingure and book a stay with us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mb-5'>
                    <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                        <img src='images/Hicking.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7 offset-lg-1 mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Hicking</h1>
                            <p className='package-text'>
                                You can be a part of expidition to all mountain ranges, be a part and reach to the top.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mb-5 flex-sm-row-reverse'>
                    <div className='col-sm-12 col-lg-4 offset-lg-1 mb-5 mb-lg-0'>
                        <img src='images/taxi.jpg' ></img>
                    </div>
                    <div className='col-sm-12 col-lg-7  mb-5 mb-lg-0'>
                        <div className='package-card'>
                            <h1 className='package-title'>Local Transport</h1>
                            <p className='package-text'>
                                Provide you facility to hire local transport or self driven vehicles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
