import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Suggestion from "../Suggestion/Suggestion";

const Authorize = () => {
  return (
    <div class="page__items-container" id="auth-form-container">
      <Header text={'Sign In'} />
      <Form id={'authorize-form'} />
      <Suggestion text={`Don't have an account?`} linkText={'Sign up'} />
    </div>
  )
}

export default Authorize;