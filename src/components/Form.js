import React, {useRef} from "react";

const Form = () => {
  const Titalref=useRef('');
  const Openingref=useRef('');
  const Realiseref=useRef('');
  
 const submitHandler = (event) => {
   event.preventDefault();
  const myObj = {
    tital:Titalref.current.value,
    Opening:Openingref.current.value,
    realiseDate:Realiseref.current.value
  }
  console.log(myObj)
 };

  return <form onSubmit={submitHandler}>
    <div>
    <label>Tital :- </label>
    <input ref={Titalref} type='text'></input>
    </div>
    <br/>
    <div>
    <label>Opening Text :- </label>
    <input ref={Openingref} type='text'></input>
    </div>
    <br/>
    <div>
    <label>Realise Date :- </label>
    <input ref={Realiseref} type='text'></input>
    </div>
    <br/>
    <button>Add</button>
  </form>
};

export default Form;