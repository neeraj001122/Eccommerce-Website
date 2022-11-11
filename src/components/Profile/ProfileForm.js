import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContexte from '../../Store/AuthContext';

const ProfileForm = () => {
  const autCtx = useContext(AuthContexte)
  const newPassword = useRef();
  const changePasswordHandler = async (event)  => {
    event.preventDefault();
   const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAkm4Ptg2WTV8XWJwYVDpyZyGkADiAAsG8',{
      method:'POST',
      body: JSON.stringify({
        idToken:autCtx.token,
        password:newPassword.current.value,
        returnSecureToken:true
      })
    })
    const data = await res.json()
    console.log(data);
  };
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler} >Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
