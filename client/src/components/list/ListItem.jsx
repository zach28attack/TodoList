import Class from "./ListItem.module.css";
import {RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill, RiPencilFill, RiDeleteBin6Line} from "react-icons/ri";
import {useState} from "react";

function ListItem(props) {
  const onDeleteItem = () => {
    props.onDeleteItem(props.id);
  };
  const [isCompleted, setIsCompleted] = useState(false);

  const checkboxHandler = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={Class.item}>
      <div className={Class.titleGroup}>
        {!props.isForm && (
          <div className={Class.checkbox} onClick={checkboxHandler}>
            {isCompleted ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
          </div>
        )}
        <div className={Class.title}>{props.children}</div>
      </div>

      {!props.isForm && (
        <button className={Class.button} onClick={onDeleteItem}>
          <RiDeleteBin6Line />
        </button>
      )}
    </div>
  );
}

export default ListItem;
