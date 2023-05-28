import Class from "./ListHeader.module.css";
import {RiAccountCircleLine, RiAddCircleLine} from "react-icons/ri";
import ListForm from "../utility/ListForm.jsx";
import {createPortal} from "react-dom";
import {useState} from "react";
import AccountMenu from "../utility/AccountMenu.jsx";
import menuClass from "../utility/AccountMenu.module.css";

function ListHeader(props) {
  const [showForm, setShowForm] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const renderFormHandler = () => {
    setShowForm(!showForm);
    setIsRotated(!isRotated);
  };
  const submitHandler = (item) => {
    props.submitHandler(item);
    setShowForm(!showForm);
    setIsRotated(!isRotated);
  };
  const accountClickHandler = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  return (
    <div className={Class.header}>
      <button className={Class.button} onClick={accountClickHandler}>
        <RiAccountCircleLine />
      </button>
      <AccountMenu className={`${menuClass.hideMenu} ${showAccountMenu ? menuClass.visibleMenu : ""}`} />

      <button className={`${Class.addButton}`} onClick={renderFormHandler}>
        <RiAddCircleLine className={`${Class.buttonOrigin} ${isRotated ? Class.rotate : undefined}`} />
      </button>
      {showForm && createPortal(<ListForm submitHandler={submitHandler} />, document.getElementById("list-form-root"))}
    </div>
  );
}

export default ListHeader;
