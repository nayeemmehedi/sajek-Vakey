import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import "./index.css";


function Form() {
   const history = useHistory();


    const [data, setdata] = useState([])

  




  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data) => {

    let a =({...data, value : 'process'})

    fetch('http://localhost:4500/form', {
  method: 'POST',
  body: JSON.stringify(a),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
   alert("succefully done")
    history.push("/");
    }
    );
    
  };

  return (
        <div>
        <div className="amily_form text-dark">

    <h1 className="text-dark">Application for registration</h1>


    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Name"> Name</label>
      <input
        placeholder="Bill"
        {...register("Name", {
          required: "this is a required",
          maxLength: {
            value: 20,
            message: "Max length is 20"
          }
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="resort">Resort Name</label>
      <input
     
        placeholder="kalapakhi"
        {...register("resort", {
          required: "this is required",
          minLength: {
            value: 2,
            message: "Min length is 2"
          }
        })}
      />
      {errors.resort && <p>{errors.resort.message}</p>}

      <label htmlFor="email">User Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="text"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

       <label htmlFor="email">User Phone Number</label>

       <input
        placeholder="01734*****"
        type="number"
        {...register("usernumber", {
          required: "this is required",
          pattern: {
        
            message: "Invalid phone Number"
          }
        })}
      />
      {errors.usernumber && <p>{errors.usernumber.message}</p>}


      <label htmlFor="email">Starting Date</label>

       <input
        placeholder="Start Date"
        type="date"
        {...register("start", {
          required: "this is required",
         
        })}
      />

       <label htmlFor="email">Ending Date</label>

       <input
        placeholder="Ending Date"
        type="date"
        {...register("end", {
          required: "this is required",
         
        })}
      />
      





      <input type="submit" />
    </form>
    
    
    </div>
    </div>
  );
}
export default Form


