import React from "react";

const Label = ({text, labelFor}) => {
  return (
    <label class="form__label_sr-only" for={labelFor}>{text}</label>
  )
}

export default Label;