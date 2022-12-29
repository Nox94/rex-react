import React from "react";

const Suggestion = ({text, linkText}) => {
  return (
    <div class="page__suggestion-container">
      <p class="page__suggestion" id="suggestion">{text}</p>
      <button class="page__link" id="change-form-link">{linkText}</button>
    </div>
  )
}

export default Suggestion;