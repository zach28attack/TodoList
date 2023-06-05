import {useState, useContext, useEffect} from "react";
import {LoginContext} from "./LoginContext";
import Cookies from "js-cookie";

const NewAccountForm = (props) => {
  const [emailInput, setEmailInput] = useState(Cookies.get("email"));
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] = useState("");
  const {loggedin} = useContext(LoginContext);

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
      <input type="text" name="email" onChange={emailInputHandler} value={emailInput}></input>

      <label>Password</label>
      <input type="text" name="password" onChange={setPasswordInputHandler}></input>

      <label>Password-confirmation</label>
      <input type="text" name="password-confirmation" onChange={setPasswordConfirmationInputHandler}></input>

      <button onClick={submitHandler}>submit</button>
    </form>
  );
};

export default NewAccountForm;
