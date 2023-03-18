import useInputBasic from "../hooks/use-input-basic";
const BasicForm = (props) => {
  const {
    resetInput: resetFirstName,
    inputValue: firstNameValue,
    isInputValidate: isFirstNameValidate,
    isUserChanged: isFirstNameChanged,
    inputValueHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputValidation: firstNameValidation,
  } = useInputBasic((value) => value.trim() !== '');
  const {
    resetInput: resetLastName,
    inputValue: lastNameValue,
    isInputValidate: isLastNameValidate,
    isUserChanged: isLastNameChanged,
    inputValueHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputValidation: lastNameValidation,
  } = useInputBasic((value) => String(value).trim() !== '');
  const {
    resetInput: resetEmail,
    inputValue: emailValue,
    isInputValidate: isEmailValidate,
    isUserChanged: isEmailChanged,
    inputValueHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    inputValidation: emailValidation,
  } = useInputBasic((value) => String(value).trim().includes('@'));


  let isBtnHidden = true;
  if (isFirstNameValidate && isEmailValidate && isLastNameValidate) {
    isBtnHidden = false;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (isFirstNameChanged && isEmailChanged) {
      return;
    }
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameValidation}>
          <label htmlFor='name'>First Name</label>
          <input onChange={firstNameHandler} onBlur={firstNameBlurHandler} type='text' id='name' value={firstNameValue} />
          {isFirstNameChanged ? <p>Please add yout first name</p> : null}
        </div>
        <div className={lastNameValidation}>
          <label htmlFor='name'>First Name</label>
          <input onChange={lastNameHandler} onBlur={lastNameBlurHandler} type='text' id='name' value={lastNameValue} />
          {isLastNameChanged ? <p>Please add yout Last name</p> : null}
        </div>
      </div>
      <div className={emailValidation}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={emailHandler} onBlur={emailBlurHandler} value={emailValue} type='text' id='name' />
        {isEmailChanged ? <p>Please Check Your Email</p> : null}
      </div>
      <div className='form-actions'>
        <button hidden={isBtnHidden}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
