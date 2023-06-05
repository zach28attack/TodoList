import Class from "./AccountModal.module.css";
import {saveNewUser, loginUser} from "../../api.jsx";
import NewAccountForm from "./NewAccountForm";
import LoginForm from "./LoginForm";
import {LoginContext} from "./LoginContext";
import {useContext} from "react";

const Form = (props) => {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const submitHandler = async (emailInput, passwordInput, passwordConfirmationInput) => {
    const success = await saveNewUser(emailInput, passwordInput, passwordConfirmationInput);
    if (success) {
      setLoggedIn(true);
      props.removeModal();
    }
  };
  const loginHandler = async (emailInput, passwordInput) => {
    const success = await loginUser(emailInput, passwordInput);
    if (success) {
      setLoggedIn(true);
      props.removeModal();
    }
  };
  const editLoginHandler = async (emailInput, passwordInput, passwordConfirmationInput) => {};

  return (
    <div>
      <button className={Class.closeBtn} onClick={props.removeModalHandler}>
        X
      </button>
      <h2>Signup!</h2>
      <NewAccountForm onFormSubmit={submitHandler} />
      <hr />
      <h2>Login!</h2>
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
        <Form removeModal={props.removeModal} />
      </div>
    </div>
  );
}

export default AccountModal;
