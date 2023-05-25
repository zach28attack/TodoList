import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";
import {useState} from "react";

function List() {
  const [items, setItems] = useState(["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"]);

  const submitHandler = (item) => {
    setItems([item, ...items]);
  };

  const deleteHandler = (e) => {
    setItems((prevItems) => {
      let updatedItems = [...prevItems].filter((item) => item !== e);
      return updatedItems;
    });
  };

  return (
    <>
      <div>
        <ListHeader submitHandler={submitHandler} />
        <div id="list-form-root"></div>
        {items.map((item) => (
          <ListItem key={item} onDeleteItem={deleteHandler} id={item}>
            {item}
          </ListItem> //update key with id
        ))}
      </div>
    </>
  );
}

export default List;
