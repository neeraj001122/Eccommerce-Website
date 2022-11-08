import React, {useRef} from "react";

const Form = (props) => { 
  const Titalref=useRef('');
  const Openingref=useRef('');
  const Realiseref=useRef('');
  
 const submitHandler = (event) => {
  event.preventDefault();
   if(Titalref.current.value === '' || Openingref.current.value === '' || Realiseref.current.value === '')
   {
    alert('Please fill all the field')
    return
   }
  const myObj = {
    tital:Titalref.current.value,
    Opening:Openingref.current.value,
    realiseDate:Realiseref.current.value
  }
  props.transfer(myObj)
  Titalref.current.value='';
  Openingref.current.value='';
  Realiseref.current.value='';
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