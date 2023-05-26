import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState, useEffect} from "react";

function App() {
  let collections = [
    {
      name: "Work",
      items: ["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"],
    },
    {name: "Home", items: []},
    {name: "Hobby", items: []},
    {name: "Health", items: []},
    {name: "Cars", items: []},
  ];

  const [activeCollection, setActiveCollection] = useState(collections[0]);

  const [items, setItems] = useState(activeCollection.items);

  const addListItemHandler = (item) => {
    setItems([item, ...items]);
  };
  const deleteListItemHandler = (e) => {
    setItems((prevItems) => {
      let updatedItems = [...prevItems].filter((item) => item !== e);
      return updatedItems;
    });
  };
  const selectCollectionHandler = (name) => {
    const selectedCollection = collections.filter((collection) => collection.name === name);
    setActiveCollection(selectedCollection);
  };

  return (
    <div className={app.grid}>
      <Collections collectionsArray={collections} onCollectionSelect={selectCollectionHandler} />
      <List items={items} onDeleteItem={deleteListItemHandler} submitHandler={addListItemHandler} />
    </div>
  );
}

export default App;
