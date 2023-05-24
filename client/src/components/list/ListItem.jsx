import Class from "./ListItem.module.css";
import {RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill, RiPencilFill, RiDeleteBin6Line} from "react-icons/ri";

function ListItem(props) {
  return (
    <div className={Class.item}>
      <div className={Class.titleGroup}>
        <div className={Class.circle}>
          <RiCheckboxBlankCircleLine />
        </div>
        <p className={Class.title}>{props.title}</p>
      </div>
      <div className={Class.actionGroup}>
        <RiPencilFill />
        <RiDeleteBin6Line />
      </div>
    </div>
  );
}

export default ListItem;
