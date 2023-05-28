import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";
import Class from "./List.module.css";
import Footer from "../utility/Footer.jsx";

function List(props) {
  return (
    <div className={Class.backgroundColor}>
      <ListHeader submitHandler={props.submitHandler} />
      <div id="list-form-root"></div>
      {props.items.map((item) => (
        <ListItem key={item} onDeleteItem={props.onDeleteItem} id={item}>
          {item}
        </ListItem> //update key with id
      ))}
      <Footer />
    </div>
  );
}

export default List;
