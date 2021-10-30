import React from 'react';

import Carousel from '../carousel/Carousel';
import AboutUs from '../components/About/AboutUs';
import TourDiary from '../components/TourDiary/TourDiary';
import About from '../About/About';
import fake from "../components/Tour/Tour.json"

const Header = () => {

  const boom = () => {
    fetch('http://localhost:4500/addHome', {
  method: 'POST',
  body: JSON.stringify(fake),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert("succefully done"));
  }





    return (
        <div>
     
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      {/* <button onClick={()=> boom()} className="btn btn-primary">hhhhhhhhhhhhhhhhhhhhhh</button> */}
      <TourDiary></TourDiary>
      <About></About>
     
            
        </div>
    );
};

export default Header;