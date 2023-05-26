import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState} from "react";

function App() {
  const [items, setItems] = useState(["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"]);
  const addListItemHandler = (item) => {
    setItems([item, ...items]);
  };
  const deleteListItemHandler = (e) => {
    setItems((prevItems) => {
      let updatedItems = [...prevItems].filter((item) => item !== e);
      return updatedItems;
    });
  };

  let collections = ["Work", "Home", "Hobby", "Health", "Cars", "School"];

  return (
    <div className={app.grid}>
      <Collections collections={collections} />
      <List items={items} onDeleteItem={deleteListItemHandler} submitHandler={addListItemHandler} />
    </div>
  );
}

export default App;
