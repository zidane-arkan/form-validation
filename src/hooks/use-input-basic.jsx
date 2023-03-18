import React, { useState, useReducer } from 'react';

const useInputBasic = (inputCondition) => {
    //Get Input Value
    const [inputValue, setInputValue] = useState('');
    //Is Input Field Blured
    const [isInputBlured, setisInputBlured] = useState(false);
    //Check Validation For Input
    const isInputValidate = inputCondition(inputValue);
    const isUserChanged = !isInputValidate && isInputBlured;
    //Change Status Input According To user Activity
    // console.log(isInputValidate);
    const inputValidation = isUserChanged ? 'form-control invalid' : 'form-control ';

    const inputValueHandler = (event) => {
        // console.log(isInputValidate);
        setInputValue(event.target.value);
    };
    const inputBlurHandler = () => {
        // console.log(1);
        setisInputBlured(true);
    };
    //Reset Value
    const resetInput = () => {
        setInputValue('');
        setisInputBlured(false);
    };
    return { resetInput, inputValue, isInputValidate, isInputBlured, isUserChanged, inputValueHandler, inputBlurHandler, inputValidation };
};

export default useInputBasic;
