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
  };
  const signUpClickHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  const logoutHandler = () => {
    logout();
    setLoggedIn(false);
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
          ) : undefined}
        </li>
      </ul>
      {isModalVisible &&
        createPortal(<AccountModal removeModal={removeModalHandler} />, document.getElementById("modal-root"))}
    </div>
  );
}

export default AccountMenu;
