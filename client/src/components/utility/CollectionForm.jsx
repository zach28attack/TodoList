import Class from "./CollectionForm.module.css";
import {useState} from "react";
import {RiAddFill} from "react-icons/ri";

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
    <>
      {
        <form className={Class.form}>
          <button onClick={clickHandler} className={Class.button}>
            <RiAddFill />
          </button>
          <input type="text" placeholder="add" onChange={changeHandler} value={input} className={Class.input}></input>
        </form>
      }
    </>
  );
}

export default CollectionForm;
