import Class from "./ListItem.module.css";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
  RiPencilFill,
  RiDeleteBin6Line,
  RiAddFill,
} from "react-icons/ri";

function ListItem(props) {
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

      {props.isForm && (
        <button className={Class.actionGroup}>
          <RiAddFill />
        </button>
      )}

      {!props.isForm && (
        <div className={Class.actionGroup}>
          <RiPencilFill />
          <RiDeleteBin6Line />
        </div>
      )}
    </div>
  );
}

export default ListItem;
