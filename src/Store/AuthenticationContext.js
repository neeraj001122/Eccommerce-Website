import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  loggedIn: false,
  login: (token) => {},
});

export const AuthContextProvider = (props) => {
    const persist = localStorage.getItem("token");
 
  const [haveToken, setHaveToken] = useState(persist);

  const loggedIn = !!haveToken;
  const loginInHandler = (token) => {
    setHaveToken(token);
    console.log(authctx.token);
    localStorage.setItem("token", token);
  };
  
  const logoutHandlerContext = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setHaveToken(null)
  };

  const authctx = {
    token: haveToken,
    loggedIn: loggedIn,
    login: loginInHandler,
    logout: logoutHandlerContext
  };

  return (
    <AuthContext.Provider value={authctx}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
