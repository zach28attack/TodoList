import Class from "./ListItem.module.css";
import {RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill, RiPencilFill, RiDeleteBin6Line} from "react-icons/ri";

function ListItem(props) {
  const onDeleteItem = () => {
    props.onDeleteItem(props.id);
  };
  return (
    <div className={Class.item}>
      <div className={Class.titleGroup}>
        {!props.isForm && (
          <div className={Class.circle}>
            <RiCheckboxBlankCircleLine />
          </div>
        )}
        <div className={Class.title}>{props.children}</div>
      </div>

      {!props.isForm && (
        <div className={Class.actionGroup}>
          <button className={Class.button}>
            <RiPencilFill />
          </button>

          <button className={Class.button} onClick={onDeleteItem}>
            <RiDeleteBin6Line />
          </button>
        </div>
      )}
    </div>
  );
}

export default ListItem;
