import Class from "./ListForm.module.css";
import ListItem from "../list/ListItem.jsx";
import {RiAddFill} from "react-icons/ri";
function ListForm() {
  return (
    <ListItem isForm="true">
      <form className={Class.form}>
        <input type="text" placeholder="What to-do?" className={Class.input}></input>
        <button className={Class.button}>
          <RiAddFill />
        </button>
      </form>
    </ListItem>
  );
}

export default ListForm;
