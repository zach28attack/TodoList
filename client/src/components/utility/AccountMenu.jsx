import Class from "./AccountMenu.module.css";
import {useState} from "react";
import {createPortal} from "react-dom";
import AccountModal from "./AccountModal.jsx";

function AccountMenu(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const accountClickHandler = () => {
    setIsModalVisible(!isModalVisible);
  };
  const removeModalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className={props.className}>
      <ul className={Class.list}>
        <li>
          <button className={Class.button} onClick={accountClickHandler}>
            Account
          </button>
        </li>
        <li className={Class.listItem}>|</li>
        <li>
          <button className={Class.button}>Sign-out</button>
        </li>
      </ul>
      {isModalVisible &&
        createPortal(<AccountModal removeModal={removeModalHandler} />, document.getElementById("modal-root"))}
    </div>
  );
}

export default AccountMenu;
