import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showButton, setShowButton] = useState(true)
  const email = useRef();
  const password = useRef();

  const submitHandler = async (event) => {
    event.preventDefault()
    setShowButton(false)

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail,enteredPassword)

    if (!isLogin) {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkm4Ptg2WTV8XWJwYVDpyZyGkADiAAsG8",
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
      if(!res.ok)
      {
      alert(data.error.errors[0].message)
      }
    } else {
       
    }
    setShowButton(true)
  };


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
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
          {showButton && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {!showButton && <p>Sending Request</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
