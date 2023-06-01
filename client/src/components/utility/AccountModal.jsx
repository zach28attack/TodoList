import Class from "./AccountModal.module.css";
import {saveNewUser} from "../../api.jsx";
import {useState} from "react";

const Form = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] = useState("");

  const emailInputHandler = (input) => {
    setEmailInput(input.target.value);
  };
  const setPasswordInputHandler = (input) => {
    setPasswordInput(input.target.value);
  };
  const setPasswordConfirmationInputHandler = (input) => {
    setPasswordConfirmationInput(input.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    saveNewUser(emailInput, passwordInput, passwordConfirmationInput);
  };

  return (
    <div>
      <button className={Class.closeBtn} onClick={props.removeModalHandler}>
        X
      </button>

      <form action="">
        <label>Email</label>
        <input type="text" name="email" onChange={emailInputHandler}></input>

        <label>Password</label>
        <input type="text" name="password" onChange={setPasswordInputHandler}></input>

        <label>Password-confirmation</label>
        <input type="text" name="password-confirmation" onChange={setPasswordConfirmationInputHandler}></input>

        <button onClick={submitHandler}>submit</button>
      </form>
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
