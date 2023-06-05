import Class from "./AccountMenu.module.css";
import {useState, useContext} from "react";
import {createPortal} from "react-dom";
import AccountModal from "./AccountModal.jsx";
import {logout} from "../../api.jsx";
import {LoginContext} from "../utility/LoginContext.jsx";

function AccountMenu(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const removeModalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };
  const accountClickHandler = () => {
    setIsModalVisible(!isModalVisible);
    // edit user credentials
  };
  const signUpClickHandler = () => {
    setIsModalVisible(!isModalVisible);
    // create new user
  };

  const logoutHandler = () => {
    // delete user session
    logout();
    setLoggedIn(false);
  };

  const loginHandler = () => {
    // setIsModalVisible(!isModalVisible);
    // use modal to validate credentials and create session
  };

  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  return (
    <div className={props.className}>
      <ul className={Class.list}>
        <li>
          {loggedIn ? (
            <button className={Class.button} onClick={accountClickHandler}>
              Account
            </button>
          ) : (
            <button className={Class.button} onClick={signUpClickHandler}>
              Sign up
            </button>
          )}
        </li>
        <li className={Class.listItem}>|</li>
        <li>
          {loggedIn ? (
            <button className={Class.button} onClick={logoutHandler}>
              Log out
            </button>
          ) : (
            <button className={Class.button} onClick={loginHandler}>
              Log in
            </button>
          )}
        </li>
      </ul>
      {isModalVisible &&
        createPortal(<AccountModal removeModal={removeModalHandler} />, document.getElementById("modal-root"))}
    </div>
  );
}

export default AccountMenu;
