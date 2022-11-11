import React, {useState} from "react";

const AuthContexte = React.createContext({
    tokens:'',
    logged:false,
    isLoggedIn: () => {},
    signIn: (token) => {}
});


 export const AuthContextProvider = (props) => {
    const [haveToken, setHaveToken] = useState(null)
    const userIsLoggedIn= !!haveToken;
     const removeItemHandler = () => {
        setHaveToken(null)
     };

     const addItemHandler = (token) => {
        setHaveToken(token) 
        console.log(token)
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