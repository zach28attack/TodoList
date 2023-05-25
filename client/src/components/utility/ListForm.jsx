import Class from "./ListForm.module.css";
import ListItem from "../list/ListItem.jsx";
import {RiAddFill} from "react-icons/ri";
function ListForm(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(event.target.item.value);
  };
  return (
    <ListItem isForm="true">
      <form className={Class.form} onSubmit={submitHandler}>
        <input name="item" type="text" placeholder="What to-do?" className={Class.input}></input>
        <button className={Class.button}>
          <RiAddFill />
        </button>
      </form>
    </ListItem>
  );
}

export default ListForm;
