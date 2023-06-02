import Class from "./AccountModal.module.css";
import {saveNewUser, loginUser} from "../../api.jsx";
import {useState} from "react";
import NewAccountForm from "./NewAccountForm";
import LoginForm from "./LoginForm";

const Form = (props) => {
  const submitHandler = (emailInput, passwordInput, passwordConfirmationInput) => {
    saveNewUser(emailInput, passwordInput, passwordConfirmationInput);
  };
  const loginHandler = (emailInput, passwordInput) => {
    loginUser(emailInput, passwordInput);
  };

  return (
    <div>
      <button className={Class.closeBtn} onClick={props.removeModalHandler}>
        X
      </button>
      new user form
      <NewAccountForm onFormSubmit={submitHandler} />
      <hr />
      LoginForm
      <LoginForm onLoginFormSubmit={loginHandler} />
    </div>
  );
};

function AccountModal(props) {
  const removeModalHandler = (e) => {
    if (e.target.classList.contains(Class.modalBackground) || e.target.classList.contains(Class.closeBtn)) {
      props.removeModal();
    }
  };

  return (
    <div className={Class.modalBackground} onClick={removeModalHandler}>
      <div className={Class.modalContent}>
        <Form removeModal={removeModalHandler} />
      </div>
    </div>
  );
}

export default AccountModal;
