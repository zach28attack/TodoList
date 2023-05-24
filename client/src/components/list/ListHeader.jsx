import Class from "./ListHeader.module.css";
import {RiAccountCircleLine, RiAddCircleLine} from "react-icons/ri";

function ListHeader() {
  return (
    <div className={Class.header}>
      <button className={Class.button}>
        <RiAccountCircleLine />
      </button>

      <button className={Class.button}>
        <RiAddCircleLine />
      </button>
    </div>
  );
}

export default ListHeader;
