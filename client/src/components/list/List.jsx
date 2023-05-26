import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";

function List(props) {
  return (
    <>
      <div>
        <ListHeader submitHandler={props.submitHandler} />
        <div id="list-form-root"></div>
        {props.items.map((item) => (
          <ListItem key={item} onDeleteItem={props.onDeleteItem} id={item}>
            {item}
          </ListItem> //update key with id
        ))}
      </div>
    </>
  );
}

export default List;
