import {useState} from "react";
import {saveNewUser, loginUser} from "../../api.jsx";

const NewAccountForm = (props) => {
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
    props.onFormSubmit(emailInput, passwordInput, passwordConfirmationInput);
  };
  return (
    <form>
      <label>Email</label>
      <input type="text" name="email" onChange={emailInputHandler}></input>

      <label>Password</label>
      <input type="text" name="password" onChange={setPasswordInputHandler}></input>

      <label>Password-confirmation</label>
      <input type="text" name="password-confirmation" onChange={setPasswordConfirmationInputHandler}></input>

      <button onClick={submitHandler}>submit</button>
    </form>
  );
};

export default NewAccountForm;
