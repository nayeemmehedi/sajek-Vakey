import React, { useState } from "react";
import "./login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { useHistory, useLocation } from "react-router";



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


 

 

  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((result) => {
        let user = result.user;

        const loggedInUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        console.log(loggedInUser);

        localStorage.setItem("user", JSON.stringify(loggedInUser));

        history.replace(from);
        window.location.reload();
      })
      .catch((error) => {
        let errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  
  return (
    <div className="row mt-5">
    
    
          <div>
            <div className="d-grid gap-2 ">
              <button
                style={{ backgroundColor: "whitesmoke" }}
                className="btn btn-secondary btn-lg bg-dark"
                onClick={handleGoogle}
              >
                <i className="fab fa-google fa-2x"></i> <span> ... </span> Sign
                Up With google
              </button>
            </div>
          </div>
     </div>
  );
};

export default Login;
