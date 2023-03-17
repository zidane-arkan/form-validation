import React, { useState } from "react";

const SimpleInput = (props) => {
  const [nameValue, setNameValue] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const isNameValid = nameValue.trim() !== '';
  const nameStatusFalse = !isNameValid && nameTouched;
  const nameValidClass = nameStatusFalse ? "form-control invalid" : "form-control";

  const nameHandler = event => {
    setNameValue(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setNameTouched(true);
  };

  const [emailValue, setEmailValue] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const isEmailValid = String(emailValue).trim().includes('@');
  const emailStatusFalse = !isEmailValid && emailTouched;
  const emailValidClass = emailStatusFalse ? "form-control invalid" : "form-control";

  const emailHandler = event => {
    setEmailValue(event.target.value);
  };
  const emailBlurHandler = (event) => {
    setEmailTouched(true);
  };

  let isFormInvalid = true;
  if (isNameValid && isEmailValid) {
    isFormInvalid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);
    if (!isNameValid && !isEmailValid) {
      return;
    }
    console.log(nameValue);
    console.log(emailValue);
    setNameValue('');
    setNameTouched(false);
    setEmailValue('');
    setEmailTouched(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={nameValidClass}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameHandler} onBlur={nameBlurHandler} type='text' id='name' value={nameValue} />
        {nameStatusFalse ? <p className="error-text">Name must be not empty</p> : null}
      </div>
      <div className={emailValidClass}>
        <label htmlFor='email'>Your Email</label>
        <input onChange={emailHandler} onBlur={emailBlurHandler} type='text' id='email' value={emailValue} />
        {emailStatusFalse ? <p className="error-text">Email must be not empty & Contains @</p> : null}
      </div>
      <div className="form-actions">
        <button hidden={isFormInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
