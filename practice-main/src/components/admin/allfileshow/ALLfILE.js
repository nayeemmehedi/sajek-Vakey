import React, { useState, useEffect } from "react";
import fake from "../../Tour/Tour.json";

const ALLfILE = () => {
  const [data, setdata] = useState([]);
  const [loading,setloading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4500/formdata")
      .then((response) => response.json())
      .then((json) => 
      
      
    {  setdata(json)
      setloading(false)
      }
      
      );

  }, []);

  const deleteform = (id) => {
    fetch(`http://localhost:4500/deleteForm/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        alert("succefully deleted");
        window.location.reload();
      });
  };



  const omyGod =(id)=>{
    fetch(`http://localhost:4500/process/${id}`, {
  method: 'PATCH',
})
  .then((response) => response.json())
  .then((data) => {
       console.log(data)
        window.location.reload();
       

      });
  }

  return (
    <div>
   
    {loading ? <div className="text-center mt-5 pt-5">  <div class="spinner-border text-info " role="status">
  <span class="sr-only">Loading...</span>
</div></div> : <div>
      {data.map((v) => (
        <div className="mt-5 ">
          <div className="row offset-1">
            <div className="col-3">{v.email}</div>
            <div className="col-2">{v.usernumber}</div>
            <div className="col-2">{v.resort}</div>
            <div className="col-2"><p className="text-danger" onClick={()=>omyGod(v._id)}><button className="btn btn-danger">{v.value} </button></p></div>


            

            <div className="col-3">
              <button
                className="btn btn-danger"
                onClick={() => deleteform(v._id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>}
    </div>
  );
};

export default ALLfILE;
