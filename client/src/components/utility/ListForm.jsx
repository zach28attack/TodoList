import Class from "./ListForm.module.css";
import ListItem from "../list/ListItem.jsx";
import {RiAddFill} from "react-icons/ri";
function ListForm() {
  return (
    <ListItem isForm="true">
      <form>
        <input type="text" placeholder="What to-do?" className={Class.input}></input>
      </form>
    </ListItem>
  );
}

export default ListForm;
