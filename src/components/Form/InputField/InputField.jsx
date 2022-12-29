import React from "react";
import Input from "./Input/Input";
import Label from "./Label/Label";

const InputField = (
  {
    labelText, 
    labelFor, 
    inputType, 
    inputName, 
    inputId, 
    placeholder, 
    autocompleteText, 
    eyeIconId, 
    errorId
  }
  ) => {
  return (
    <div class="form__input-field">
      <Label 
      text={labelText} 
      labelFor={labelFor} 
      />
      <Input 
      type={inputType} 
      name={inputName} id={inputId} 
      placeholder={placeholder} 
      autocomplete={autocompleteText} 
      eyeIconId={eyeIconId} 
      errorId={errorId}
      />
    </div>
  )
}

export default InputField;