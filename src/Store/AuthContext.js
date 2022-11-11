import React, {useState} from "react";

const AuthContexte = React.createContext({
    token:'',
    logged:false,
    isLoggedIn: () => {},
    signIn: (token) => {}
});


 export const AuthContextProvider = (props) => {
   const initialValue = localStorage.getItem('token')
    const [haveToken, setHaveToken] = useState(initialValue)
    const userIsLoggedIn= !!haveToken;
     const removeItemHandler = () => {
        setHaveToken(null)
        localStorage.removeItem('token')
     };

     const addItemHandler = (token) => {
        setHaveToken(token)   
        localStorage.setItem('token', token)
     };

    const Authctx = {
        token: haveToken,
        logged:userIsLoggedIn,
        isLoggedIn:removeItemHandler,
        signIn:addItemHandler
       }


    return <AuthContexte.Provider value={Authctx}>{props.children}</AuthContexte.Provider>

};

export default AuthContexte;