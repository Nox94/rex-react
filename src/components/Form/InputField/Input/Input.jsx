import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InputEye from "../InputEye/InputEye";

const Input = ({type, name, id, placeholder, autocomplete, eyeIconId, errorId}) => {
  return (
    <>
    <input
      class="form__input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autocomplete={autocomplete}
      required
    />
    <InputEye id={eyeIconId} />
    <ErrorMessage id={errorId}/>
    </>
  )
}

export default Input;