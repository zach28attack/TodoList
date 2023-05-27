import Class from "./ListHeader.module.css";
import {RiAccountCircleLine, RiAddCircleLine} from "react-icons/ri";
import ListForm from "../utility/ListForm.jsx";
import {createPortal} from "react-dom";
import {useState} from "react";

function ListHeader(props) {
  const [showForm, setShowForm] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const renderFormHandler = () => {
    setShowForm(!showForm);
    setIsRotated(!isRotated);
  };
  const submitHandler = (item) => {
    props.submitHandler(item);
    setShowForm(!showForm);
    setIsRotated(!isRotated);
  };

  return (
    <div className={Class.header}>
      <button className={Class.button}>
        <RiAccountCircleLine />
      </button>

      <button className={`${Class.addButton}`} onClick={renderFormHandler}>
        <RiAddCircleLine className={`${Class.buttonOrigin} ${isRotated ? Class.rotate : undefined}`} />
      </button>
      {showForm && createPortal(<ListForm submitHandler={submitHandler} />, document.getElementById("list-form-root"))}
    </div>
  );
}

export default ListHeader;
