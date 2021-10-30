import React from 'react';
import pic from './Picture/Discover-sajek-valley.jpg'

const About = () => {
    return (
        <div className="mt-4">
            <div class="container">



                <div class="row">

                    <h2 style={{ color: "blue" }}>We Create Unique Vacations And Luxury Honeymoons Around The World</h2>
                    
                    <hr />
                    <div class="col-lg-4 offset-1 col-md-12 col-sm-12">

                        <div className="my-5">
                            <h3 className="text-center" style={{ color: "#194d33" }}>Let's Get Started</h3>


                        </div>
                          <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your phone number with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Text Us </label>
                                <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text"></div>
                            </div>
                            
                           
                            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
                        </form>
                    </div>


                    <div class="col-lg-6 offset-1 col-md-12 col-sm-12 text-center">
                        <img className="se2 mt-5 pt-2 rounded" src={pic} style={{height:"400px",width:"570px"}} alt="" />
                    </div>




                </div>


            </div>

        </div>
    );
};

export default About;