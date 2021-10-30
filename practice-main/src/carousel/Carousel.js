import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-md-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img style={{ objectFit: "none", height: '450px', width: '550px' }}

                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sajek_Valley_Rangamati_3.jpg/1280px-Sajek_Valley_Rangamati_3.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>"Sajek Valley Resort:</h1>
                            <p style={{ color: "white", fontFamily: "Besley" }}> "A Unique Tourist Spot Our Motherland"</p>
                            
                            
                            <button class="btn btn-primary rounded-pill btn-lg" style={{ fontFamily: "Besley" }}>Explore Now</button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img style={{ objectFit: "none", height: '450px', width: '550px' }}
                            src="https://i.pinimg.com/originals/ba/c2/e8/bac2e850e80ae97e7f3cba63a730626c.jpg" class="d-block w-100" alt="..." />
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>“Sajek Valley Resort:</h1>
                            <p style={{ color: "white", fontFamily: "Besley" }}> "Journey Through Sajek Valley of Bangladesh Our Motherland"</p>
                            <button class="btn btn-primary rounded-pill btn-lg" style={{ fontFamily: "Besley" }}>Explore Now</button>
                            
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img style={{ objectFit: "none", height: '450px', width: '550px' }}
                            src="https://www.bdbooking.com/upload/property/hotel/111220200305546335fad090287150.jpg" class="d-block w-100" alt="..." />
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>"Sajek Valley Resort:</h1>
                            <p style={{ color: "white", fontFamily: "Besley" }}> Discovering The Land Of Hills And Clouds"</p>
                           
                            <button class="btn btn-primary rounded-pill btn-lg" style={{ fontFamily: "Besley" }}>Explore Now</button>
                        </div>

                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Carousel;