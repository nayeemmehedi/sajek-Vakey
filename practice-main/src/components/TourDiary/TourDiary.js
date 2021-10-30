import React, { useState, useEffect } from "react";
import "../Tour/TourDiary.css";
import { Link } from "react-router-dom";

const TourDiary = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4500/home")
      .then((response) => response.json())
      .then((json) => setdata(json));
    setloading(false);
  }, []);

  return (
    <div>
      { loading ? (
        <div className="text-center mt-5 pt-5">
          {" "}
          <div class="spinner-border text-info " role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h1
            className="text-center my-lg-2 my-md-0 my-sm-0 "
            style={{
              fontFamily: "Besley",
              color: "#303f9f",
              textAlign: "center",
            }}
          >
            {" "}
            Sajek, The Valley Of Cloud’s Best Resorts To Stay
          </h1>
          <hr />

          <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
            {data.map((v) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 rounded"
                style={{ fontFamily: "Besley" }}
              >
                <div className="mt-3" style={{ color: "black" }}>
                  <div className="rounded-3 shadow ps-4 ">
                    <img
                      className="rounded-3 mt-3"
                      style={{ height: "200px", width: "200px" }}
                      src={v.img}
                      alt=""
                    />
                    <h6 className="mt-2">{v.resortName}</h6>
                    <p>{v.amount}</p>
                    <p>{v.phoneNumber}</p>

                    <div>
                      <Link to={`./fulldetails/${v._id}`}>
                        {" "}
                        <button className="btn btn-primary mb-3 ">
                          Book A Room
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDiary;
