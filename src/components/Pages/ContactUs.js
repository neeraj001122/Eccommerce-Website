import React, {useRef} from 'react';
import Header from '../Header/Header'
import classes from './ContactUs.module.css'


const ContactUs = () => {
    const nameRef = useRef('');
    const emailIdRef = useRef('');
    const phoneNumberRef = useRef('');
    
    
    const submitHandler = async (event) => {
        event.preventDefault();
        const userDetails = {
            name: nameRef.current.value,
            email: emailIdRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        }
        const response = await fetch('https://apiproject-b1ecd-default-rtdb.firebaseio.com/contactus.json', {
            method:'POST',
            body: JSON.stringify(userDetails),
            headers:{
                'content' : 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    };
   return (
    <div>
    <Header></Header>
    <div className={classes.form}>
        <h2>Please Fill The Form</h2>
        <br/>
        <form onSubmit={submitHandler}>
            <div className={classes.field}>
            <label>Name</label>
            <input type='text' ref={nameRef}></input>
            </div>
            <br />
            <div className={classes.field}>
            <label>Email id</label>
            <input type='email' ref={emailIdRef}></input>
            </div>
            <br />
            <div className={classes.field}>
            <label>Phone Number</label>
            <input type='text' ref={phoneNumberRef}></input>
            </div>
            <br />
            <button className={classes.button}>Submit</button>
        </form>
    </div>
    </div>
   )
};

export default ContactUs;