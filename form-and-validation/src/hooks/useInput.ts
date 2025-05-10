import { useState } from "react";

export function useInput(defaultValue, validationFn) {
   const [enteredValue, setEnteredValue] = useState(defaultValue);
   const [didEdit, setDidEdit] = useState(false);

   const valueIsValid = validationFn(enteredValue);

   const handleOnChangeInput = (event) => {
      setEnteredValue(event.target.value)
      setDidEdit(false)
   }
   const handleInputBlur = () => {
      setDidEdit(true)
   }

   return {
      value: enteredValue,
      handleInputBlur,
      handleOnChangeInput,
      didEdit,
      hasError: didEdit && !valueIsValid
   }
}