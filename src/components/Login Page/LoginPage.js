import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginPage.module.css";
import { useContext } from "react";
import Header from "../Header/Header";
import AuthContext from "../../Store/AuthenticationContext";

const LoginPage = (props) => {
   const authctx = useContext(AuthContext)
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const newEmail = enteredEmail.replace('@','')
    const mailApi = newEmail.replace('.','')
    localStorage.setItem('email',mailApi);
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkm4Ptg2WTV8XWJwYVDpyZyGkADiAAsG8",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },  
      }
    );
    const data = await res.json();
    if (!res.ok) {
      alert('LOGIN FAILED POSSIBLE REASON:-'+data.error.errors[0].message);
    } else {
      authctx.login(data.idToken);
      history.replace('/home');    
    } 
  };
 
  return (
    <div>
        <Header />
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={password} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
    </div>
  );
};

export default LoginPage;
