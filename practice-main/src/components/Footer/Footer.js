import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">
            <div className="footer-container">
                <div >
                    <div className="row row2">

                        <div className="col-md-5">
                            <div className="right-footer-container">


                                <div className="phone d-flex align-items-center justify-content-center mt-5">

                                    <div>
                                        <h5 style={{ fontFamily: "Besley" }}> <small> Hotline Number : </small>
                                            <span style={{ color: "blue" }}>+12000 444 222/ +0777 700 666</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">

                                    <div>
                                        <p> <span className="foter-phone-icon" style={{ fontFamily: "Besley" }}>
                                            Address : Baghaichori Upazila in Rangamati hill district</span>
                                            <hr />
                                           
                                            <br />
                                            <p style={{ fontFamily: "Besley" }}>Hours: Open 09:00AM-Close 10:00PM  <span className="foter-phone-icon">


                                            </span></p>


                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul className="mt-5">
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Home</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>About</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Services</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Contact Us</li>
                                </ul>
                            </div>
                        </div>





                        <div className="col-md-5">
                            <div className="left-container text-start mt-4">
                                <h1 style={{ fontFamily: "Besley", textAlign: "center" }}>Travel <span style={{ color: "blue", fontFamily: "Besley" }} > Nation </span></h1>
                                <div className="icons-container d-flex text-center ">

                                </div>
                                <p className="mt-4 ">
                                    <small style={{ fontFamily: "Besley" }}>
                                        Sajek is a place of evergreen woody heavens with natural waterfalls, dancing white-grey soft velvet cloud. The picturesque landscape is decorated with green hills, steep cliffs wedged between cloud and sky, rivers and lake filled with cold and tranquil water and green-gold woods lining tribal villages.
                                    </small>
                                </p>


                            </div>
                        </div>






                    </div>
                </div>
            </div>
            <p style={{ textAlign: "right", fontWeight: "bold", paddingTop: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "blue" }}>Amily Shahrin</span>@Travel Nation</small></p>

        </div>
    );
};

export default Footer;