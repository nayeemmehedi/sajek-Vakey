import React,{useState} from 'react';

import { useParams } from 'react-router-dom'

import tour from "../components/Tour/Tour.json"
import {

  Link
} from "react-router-dom";

const FullDetails = () => {

    const [data, setdata] = useState([])

  fetch('http://localhost:4500/home')
  .then((response) => response.json())
  .then((json) => setdata(json));


  const {id} =useParams() 

 
   

 const name= data.filter(v=> v._id===id)

 

    return (
        <div className="mt-5">
       

         <div className="row">
             <div className="col-2"></div>
             <div className="col-6 border shadow ">

             <img className="mt-3 rounded-3" src={name[0]?.img} alt="" />
             
            
             <h3 className="mt-3">Resort Name:  {name[0]?.resortName}</h3>
             <p>Resort Location:  {name[0]?.address}</p>


             <p>Owner Name : {name[0]?.ownerName}</p>
             <p>Phone No. {name[0]?.phoneNumber}</p>
             <p>Details: {name[0]?.details}</p>

             
               <Link to="/form"><button className="btn btn-primary mb-3">click me</button></Link>
             
             </div>
             <div className="col-3"></div>
         </div>
            
        </div>
    );
};

export default FullDetails;