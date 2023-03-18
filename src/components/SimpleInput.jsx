import React from "react";
import useInputCheck from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    inputHandler: nameHandler,
    inputBlurHandler: nameBlurHandler,
    inputValue: nameValue,
    isInputValid: isNameValid,
    inputStatusFalse: nameStatusFalse,
    inputValidClass : nameValidClass,
    resetInput : resetInputName
  } = useInputCheck((value) => value.trim() !== '');
  const {
    inputHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    inputValue: emailValue,
    isInputValid: isEmailValid,
    inputStatusFalse: emailStatusFalse,
    inputValidClass: emailValidClass,
    resetInput: resetInputEmail
  } = useInputCheck((value) => String(value).trim().includes('@'));

  let isFormInvalid = true;
  if (isNameValid && isEmailValid) {
    isFormInvalid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isNameValid && !isEmailValid) {
      return;
    }
    console.log(nameValue);
    console.log(emailValue);
    resetInputName();
    resetInputEmail();
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
