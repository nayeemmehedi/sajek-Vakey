import React,{useState} from 'react';
import ALLfILE from "../allfileshow/ALLfILE"
import Registration from "../registration/Registration"
import { Link, useHistory } from 'react-router-dom';

const NewAdmin = () => {
    const [b,setb] =useState(true)
    const [c,setc] =useState()


  const  boom =(a) => {
      if(a){
          setb(true)
          setc(false)
          
      }
      else{
          setc(true)
          setb(false)
      }
      
}



    return (
        <div>
           <div className="row" >
               <div className="col-2 bg-dark text-white" style={{height: '100vh'}}>

              <p className="btn ms-3 mt-5 pt-3 text-white"onClick={()=>{boom(true)}}>ALL file</p> <br />

               <p className="btn ms-3 my-2 text-white" onClick={()=>{boom(false)}}>Registration</p>
               
               
               </div>
               <div className="col-9">

               {

                   b ? <ALLfILE/>:null



               }

               {
                   c?<Registration/>:null
               }
               
               
               
               </div>
           </div>
            
        </div>
    );
};

export default NewAdmin;