import Class from "./CollectionForm.module.css";
import {useState} from "react";

function CollectionForm(props) {
  const clickHandler = (e) => {
    e.preventDefault();
    props.submitCollection(input);
    setInput("");
  };
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className={Class.name}>
      <input type="text" placeholder="list-name" onChange={changeHandler} value={input}></input>
      <button onClick={clickHandler}></button>
    </form>
  );
}

export default CollectionForm;
