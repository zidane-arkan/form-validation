import React, { useState } from 'react';

const useInputCheck = (validateInputValue) => {
    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const isInputValid = validateInputValue(inputValue);
    const inputStatusFalse = !isInputValid && inputTouched;
    const resetInput = () => {
        setInputValue('');
        setInputTouched(false);
    };
    const inputHandler = (event) => {
        setInputValue(event.target.value);
    };
    const inputBlurHandler = () => {
        setInputTouched(true);
    };
    const inputValidClass = inputStatusFalse ? "form-control invalid" : "form-control";
    return { inputHandler, inputBlurHandler, inputValue, isInputValid, inputStatusFalse, resetInput, inputValidClass };
};

export default useInputCheck;
