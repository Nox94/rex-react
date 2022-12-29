import React from 'react';
import InputField from './InputField/InputField';
import Button from './Button/Button';

const Form = ({id}) => {
  return (
    <form class="form" id={id}>
      {id === 'register-form' && (
        <>
          <InputField
            labelText={'First Name'}
            labelFor={'first-name'}
            inputType={'text'}
            inputName={'first-name'}
            inputId={'first-name'}
            placeholder={'First Name'}
            autocompleteText={'username'}
            eyeIconId={''}
            errorId={'first-name-input-error-message'}
          />

          <InputField
            labelText={'Last Name'}
            labelFor={'last-name'}
            inputType={'text'}
            inputName={'last-name'}
            inputId={'last-name'}
            placeholder={'Last Name'}
            autocompleteText={''}
            eyeIconId={''}
            errorId={'last-name-input-error-message'}
          />

          <InputField
            labelText={'Email'}
            labelFor={'email'}
            inputType={'email'}
            inputName={'email'}
            inputId={'email'}
            placeholder={'Email'}
            autocompleteText={'username'}
            eyeIconId={''}
            errorId={'email-input-error-message'}
          />

          <InputField
            labelText={'Password'}
            labelFor={'password'}
            inputType={'password'}
            inputName={'password'}
            inputId={'password'}
            placeholder={'Password'}
            autocompleteText={'new-password'}
            eyeIconId={'password-eye-icon'}
            errorId={'password-input-error-message'}
          />

          <InputField
            labelText={'Confirm Password'}
            labelFor={'confirm-password'}
            inputType={'password'}
            inputName={'confirm-password'}
            inputId={'confirm-password'}
            placeholder={'Confirm Password'}
            autocompleteText={'new-password'}
            eyeIconId={'confirm-password-eye-icon'}
            errorId={'confirm-password-input-error-message'}
          />
          <Button text={'Sign Up'} />
        </>
      )}
      {id === 'authorize-form' && (
        <>
          <InputField
            labelText={'Email'}
            labelFor={'email'}
            inputType={'email'}
            inputName={'email'}
            inputId={'email'}
            placeholder={'Email'}
            autocompleteText={'username'}
            eyeIconId={''}
            errorId={'email-input-error-message'}
          />

          <InputField
            labelText={'Password'}
            labelFor={'password'}
            inputType={'password'}
            inputName={'password'}
            inputId={'password'}
            placeholder={'Password'}
            autocompleteText={'new-password'}
            eyeIconId={'password-eye-icon'}
            errorId={'password-input-error-message'}
          />
          <Button text={'Sign In'} />
        </>
      )}
      {id === 'restore-password-form' && (
        <>
          <InputField
            labelText={'Email'}
            labelFor={'email'}
            inputType={'email'}
            inputName={'restore-email-input'}
            inputId={'restore-email-input'}
            placeholder={'Email'}
            autocompleteText={'username'}
            eyeIconId={''}
            errorId={'email-input-error-message'}
          />
          <Button text={'Send Reset Link'} />
        </>
      )}
    </form>
  );
};

export default Form;
