import React,{useEffect,useState} from 'react';

const Card = () => {

     let user = JSON.parse(localStorage.getItem("user"));

    const [data,setdata] =useState([])


         useEffect(() => {
    fetch(`http://localhost:4500/emaildata/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [])

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


    return (





        <div>

        <div>

             <h1 className="text-center my-lg-2 my-md-0 my-sm-0 " style={{ fontFamily: 'Besley', color: "#303f9f", textAlign: "center" }}> Your Ordered date</h1>
            <hr />


            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">


                {
                    data.map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="m-5" style={{ color: "black" }}>

                                <div className="rounded-3 shadow  ">

                                   
                                  <div className ="p-5">
                                    <p className="text-end text-danger"> {v?.value}</p>

                                    <h6 className="mt-2">Email : {v.email}</h6>
                                    <p>Start date : {v.start}</p>
                                    <p>End Date : {v.end}</p>
                                    <p>Resort name : {v.resort}</p>
                                    <button className="btn btn-danger"  onClick={() => deleteform(v._id)}>delete</button>
                                  
                                  
                                  </div>
                                   
                                    <div>

                                     
                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                }


            </div>
            
            </div>

            
        </div>
    );
};

export default Card;