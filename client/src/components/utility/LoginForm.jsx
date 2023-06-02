import {useState} from "react";

const LoginForm = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const emailInputHandler = (input) => {
    setEmailInput(input.target.value);
  };
  const setPasswordInputHandler = (input) => {
    setPasswordInput(input.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLoginFormSubmit(emailInput, passwordInput);
  };

  return (
    <form>
      <label>Email</label>
      <input type="text" name="email" onChange={emailInputHandler}></input>

      <label>Password</label>
      <input type="text" name="password" onChange={setPasswordInputHandler}></input>

      <button onClick={submitHandler}>submit</button>
    </form>
  );
};

export default LoginForm;
