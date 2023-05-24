import Class from "./ListHeader.module.css";
import {RiAccountCircleLine, RiAddCircleLine} from "react-icons/ri";
import ListForm from "../utility/ListForm.jsx";
import {createPortal} from "react-dom";
import {useState} from "react";

function ListHeader() {
  const [showForm, setShowForm] = useState(false);
  const renderFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className={Class.header}>
      <button className={Class.button}>
        <RiAccountCircleLine />
      </button>

      <button className={Class.button} onClick={renderFormHandler}>
        <RiAddCircleLine />
        {showForm && createPortal(<ListForm />, document.getElementById("list-form-root"))}
      </button>
    </div>
  );
}

export default ListHeader;
