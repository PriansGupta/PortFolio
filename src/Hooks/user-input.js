import { useState } from "react";

const useInput = (ValidateValue) => {
  const [enteredValue, SetEnteredValue] = useState("");
  const [Istouched, SetIsTouched] = useState(false);

  const valueIsValid = ValidateValue(enteredValue);
  const hasError = !valueIsValid && Istouched;

  const ValueChangeHandler = (event) => {
    SetEnteredValue(event.target.value);
  };

  const InputBlurHandler = () => {
    SetIsTouched(true);
  };

  const reset = () => {
    SetEnteredValue("");
    SetIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    ValueChangeHandler,
    InputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
