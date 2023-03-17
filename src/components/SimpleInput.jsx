import React, { useState } from "react";

const SimpleInput = (props) => {
  const [nameValue, setNameValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const isInputValid = nameValue.trim() !== '';
  const inputStatusFalse = !isInputValid && inputFocus;
  const formValidClass = inputStatusFalse ? "form-control invalid" : "form-control";

  const nameHandler = event => {
    setNameValue(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setInputFocus(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setInputFocus(true);
    if (nameValue.trim() == '') {
      return;
    }
    console.log(nameValue);
    setNameValue('');
    setInputFocus(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={formValidClass}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameHandler} onBlur={nameBlurHandler} type='text' id='name' value={nameValue} />
        {inputStatusFalse ? <p className="error-text">Name must be not empty</p> : null}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
