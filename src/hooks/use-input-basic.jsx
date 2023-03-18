import React, { useState, useReducer } from 'react';

const initialValue = {
    inputValue: '',
    isInputBlured: false
};
const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT_VALUE') {
        return { inputValue: action.value, isInputBlured: state.isInputBlured };
    } else if (action.type === 'INPUT_BLUR') {
        return { isInputBlured: true, inputValue: state.inputValue };
    } else if (action.type === 'INPUT_RESET') {
        return {
            inputValue: '',
            isInputBlured: false
        };
    }
    return initialValue;
};
const useInputBasic = (inputCondition) => {
    const [inputState, dispatchInput] = useReducer(inputStateReducer, initialValue);
    //Extract State
    const { inputValue, isInputBlured } = inputState;
    //Check Validation For Input
    const isInputValidate = inputCondition(inputValue);
    const isUserChanged = !isInputValidate && isInputBlured;
    const inputValidation = isUserChanged ? 'form-control invalid' : 'form-control ';
    //Change Status Input According To user Activity
    // console.log(isInputValidate);
    const inputValueHandler = (event) => {
        // console.log(isInputValidate);
        dispatchInput({ type: 'INPUT_VALUE', value: event.target.value });
    };
    const inputBlurHandler = () => {
        // console.log(1);
        dispatchInput({ type: 'INPUT_BLUR', value: true });
    };
    //Reset Value
    const resetInput = () => {
        dispatchInput({ type: 'INPUT_RESET' });
    };
    return { resetInput, inputValue, isInputValidate, isInputBlured, isUserChanged, inputValueHandler, inputBlurHandler, inputValidation };
};

export default useInputBasic;
