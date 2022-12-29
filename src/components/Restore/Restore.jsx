import React from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import ReturnArrow from './ReturnArrow/ReturnArrow';

const Restore = () => {
  return (
    <div class="page__items-container" id="restore-page-container">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ReturnArrow />
        <Header text={'Restore password'} />
      </div>
      <p class="page__text">
        Please use your email address, and we&#8217;ll send you the link to reset your password
      </p>
      <span class="page__text" id="restore-message"></span>
      <Form id={'restore-password-form'} />
    </div>
  );
};

export default Restore;
