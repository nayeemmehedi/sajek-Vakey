import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div class="container ">
                <div class="row  mt-lg-5 mt-md-0 mt-sm-0 col-lg-12 col-md-12 col-sm-12">
                    <h2 style={{ textAlign: "center", color: "#4a4a4a", fontFamily: "Besley" }} >Welcome To "Travel <span style={{color:"blue"}}>Nation</span>"</h2>
                    
                    <hr />
                    <br />

                    <div class="col">
                        <img class="aboutImage" style={{ objectFit: "none", height: '450px', width: '550px' }} src="https://rodipedia7.files.wordpress.com/2018/02/pexels-photo-6723583.jpeg" alt="" />

                    </div>

                    <div class="col">
                       
                        <h2 style={{ color: "blue", fontFamily: "Besley" }}>What is tour guiding service?</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>Guides are tourism professionals that lead their guests through the most interesting parts of their region. It is their task to entertain visitors to their region and to help them to interpret the sights that they are visiting.</p>
                        <br />


                        <hr />


                        <h2 style={{ color: "blue", fontFamily: "Besley" }}>How should a tour guide dress?</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>Wear clear and neat, casual but not too loose. Guiding is a way of presentation. Clear and neat dressing provides a good first impression to your clients. As most tour guides meet clients on vacation and trips, casual dressing is recommended</p>
                    </div>




                    





                </div>



            </div>
        </div>
    );
};

export default AboutUs;