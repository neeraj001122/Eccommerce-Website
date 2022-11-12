import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginPage.module.css";
import Cartctx from "../../Store/creat-context";
import { useContext } from "react";

const LoginPage = () => {
   const cartCtx = useContext(Cartctx)
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
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
      alert('login failed',data.error.errors[0].message);
    } else {
      cartCtx.login(data.idToken);
      history.replace('/home');    
    }
  };
  return (
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
  );
};

export default LoginPage;
