import React from "react";
import ButtonArrow from "./ButtonArrow/ButtonArrow";

const Button = ({text}) => {
  return (
    <button className="button form__button" type="submit">
    {text}
    <ButtonArrow />
  </button>
  )
}

export default Button;