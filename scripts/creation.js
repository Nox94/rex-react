const signUpPageTemplate = `<div class="page__items-container" id="form-container">
<h1 class="page__header" id="page-form-header">Sign Up</h1>

<form class="form" id="register-form">
  <div class="form__input-field" id="first-name-input-field">
    <label class="form__label_sr-only" for="first-name">First Name</label>
    <input
      class="form__input"
      name="first-name"
      type="text"
      id="first-name"
      placeholder="First Name"
      autocomplete="username"
      required
    />
    <span id="first-name-input-error-message" class="error">retgertert</span>
  </div>

  <div class="form__input-field" id="last-name-input-field">
    <label class="form__label_sr-only" for="last-name">Last Name</label>
    <input
      class="form__input"
      name="last-name"
      type="text"
      id="last-name"
      placeholder="Last Name"
      required
    />
    <span id="last-name-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field" id="first-name-input-field">
    <label class="form__label_sr-only" for="email">Email</label>
    <input
      class="form__input"
      type="email"
      id="email"
      placeholder="Email"
      autocomplete="username"
      required
    />
    <span id="email-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="password">Password</label>
    <input
      class="form__input"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id='password-eye-icon'></a>
    <span id="password-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="confirm-password">Confirm Password</label>
    <input
      class="form__input"
      type="password"
      name="confirm-password"
      id="confirm-password"
      placeholder="Confirm Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id="confirm-password-eye-icon"></a>
    <span id="confirm-password-input-error-message" class="error"></span>
  </div>

  <button class="button form__button" type="submit">
    Sign up<img src="../images/button_arrow.png" class="button__arrow" alt="arrow" />
  </button>
</form>
<div class="page__suggestion-container">
  <p class="page__suggestion" id="suggestion">Already have an account?</p>
  <a class="page__link" id="change-form-link">Sign in</a>
</div>
</div>`;

const authorizePageTemplate = `<div class="page__items-container" id="auth-form-container">
<h1 class="page__header" id="page-form-header">Sign In</h1>
<form class="form" id="authorize-form">
  <div class="form__input-field">
    <label class="form__label_sr-only" for="email">Email</label>
    <input
      class="form__input"
      type="email"
      id="auth-email"
      placeholder="Email"
      autocomplete="username"
      required
    />
    <span id="email-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="password">Password</label>
    <input
      class="form__input"
      type="password"
      name="password"
      id="auth-password"
      placeholder="Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id='auth-passsword-eye-icon'></a>
    <span id="password-input-error-message" class="error"></span>
  </div>

  <button class="button form__button" type="submit">
    Sign in<img src="../images/button_arrow.png" class="button__arrow" alt="arrow" />
  </button>
</form>
<a class="page__link page__link_thin" id='restore-page-link'>Forgot Password?</a>
<div class="page__suggestion-container">
  <p class="page__suggestion" id="suggestion"><p class="page__suggestion" id="suggestion">Don't have an account?</p>
  <a class="page__link" id="change-form-link">Sign up</a></p>
  <a class="page__link" id="change-form-link">Sign up</a>
</div>
</div>`;

const restorePageTemplate = `<div class="page__items-container" id="restore-page-container">
<div style="display: flex; align-items: center;">
  <a class="page__return-arrow"></a>
  <h1 class="page__header">Restore password</h1>
</div>
<p class="page__text">
  Please use your email address, and we&#8217;ll send you the link to reset your password
</p>
<span class="page__text" id="restore-message"></span>
<form class="form">
  <div class="form__input-field">
    <label class="form__label form__label_sr-only" for="restore-email-input">Email</label>
    <input
      class="form__input"
      type="email"
      id="restore-email-input"
      name="restore-email-input"
      placeholder="Email"
    />
  </div>
  <button class="button form__button" type="submit">
    Send Reset Link
    <img class="button__arrow" src="../images/button_arrow.png" alt="return arrow" />
  </button>
</form>
</div>`;
