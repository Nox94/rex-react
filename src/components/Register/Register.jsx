import React from "react";
import Form from "../Form/Form";
import Header from '../Header/Header';
import Suggestion from "../Suggestion/Suggestion";

const Register = () => {
  return (
    <div class="form__input-field" id="first-name-input-field">
      <Header text={'Sign Up'} />
      <Form id={'register-form'} />
      <Suggestion text={'Already have an account?'} linkText={'Sign in'} />
    </div>
    
  )
}

export default Register;