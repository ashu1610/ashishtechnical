import React from 'react';
import { Button } from './Button';
import './Trip.css';

function Trip() {
    return (
        <div className='trip_wraper'>
            <div className='container'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/himalaya.jpg" />
                                        <h2 className='trip_title'>Himalaya</h2>
                                        <p className='trip_rate'>$2500</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li><strike>Internet</strike></li>
                                            <li>SUV</li>
                                            <li>Equipments</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/amazon.jpg" />
                                        <h2 className='trip_title'>Amazon</h2>
                                        <p className='trip_rate'>$3400</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li><strike>Internet</strike></li>
                                            <li>Boat</li>
                                            <li>Equipments</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/dive.jpg" />
                                        <h2 className='trip_title'>Marine Dive</h2>
                                        <p className='trip_rate'>$1700</p>
                                        <ul className='trip_info'>
                                            <li><strike>Hotel</strike></li>
                                            <li>Food</li>
                                            <li><strike>Internet</strike></li>
                                            <li>Boat</li>
                                            <li>Equipments</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/japan.jpg" />
                                        <h2 className='trip_title'>Japan</h2>
                                        <p className='trip_rate'>$2100</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li>Internet</li>
                                            <li>Flight</li>
                                            <li>Guide</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/india.jpg" />
                                        <h2 className='trip_title'>India</h2>
                                        <p className='trip_rate'>$4200</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li>Internet</li>
                                            <li>Flight</li>
                                            <li>Guide</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/japan.jpg" />
                                        <h2 className='trip_title'>london</h2>
                                        <p className='trip_rate'>$3800</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li>Internet</li>
                                            <li>Flight</li>
                                            <li>Guide</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/balon.jpg" />
                                        <h2 className='trip_title'>AirBalon</h2>
                                        <p className='trip_rate'>$1500</p>
                                        <ul className='trip_info'>
                                            <li><strike>Hotel</strike></li>
                                            <li>Food</li>
                                            <li><strike>Internet</strike></li>
                                            <li><strike>SUV</strike></li>
                                            <li>Equipments</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/bali.jpg" />
                                        <h2 className='trip_title'>Bali</h2>
                                        <p className='trip_rate'>$2500</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li>Internet</li>
                                            <li>Flight</li>
                                            <li>Guide</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 mb-5 mb-lg-0'>
                                    <div className='trip-card'>
                                        <img src="images/southafrica.jpg" />
                                        <h2 className='trip_title'>South Africa</h2>
                                        <p className='trip_rate'>$3800</p>
                                        <ul className='trip_info'>
                                            <li>Hotel</li>
                                            <li>Food</li>
                                            <li>Internet</li>
                                            <li>SUV</li>
                                            <li>Equipments</li>
                                        </ul>
                                        <Button buttonStyle='btn--primary'>Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Trip;