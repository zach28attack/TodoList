import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState} from "react";

function App() {
  const [collections, setCollections] = useState([
    {
      name: "Work",
      items: ["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"],
    },
    {name: "Home", items: ["Clean"]},
    {name: "Hobby", items: ["Walk"]},
    {name: "Health", items: ["Wash"]},
    {name: "Cars", items: ["Buy"]},
  ]);
  const [activeCollection, setActiveCollection] = useState(collections[0]);

  const addListItemHandler = (item) => {
    setCollections((prevCollections) => {
      const updatedCollections = [...prevCollections];
      const index = updatedCollections.findIndex((collection) => {
        return collection.name === activeCollection.name;
      });
      if (index !== -1) {
        updatedCollections[index].items = [item, ...updatedCollections[index].items];
      }
      return updatedCollections;
    });
  };

  const deleteListItemHandler = (itemId) => {
    setCollections((prevCollections) => {
      const updatedCollections = [...prevCollections];
      const index = updatedCollections.findIndex((collection) => {
        return collection.name === activeCollection.name;
      });

      if (index !== -1) {
        updatedCollections[index].items = updatedCollections[index].items.filter((item) => {
          return item !== itemId; //TODO: update to reflex each items id when connected to db
        });
      }
      return updatedCollections;
    });
  };

  const selectCollectionHandler = (name) => {
    const selectedCollection = collections.filter((collection) => collection.name === name);
    setActiveCollection(selectedCollection[0]);
  };
  const submitCollectionHandler = (newCollection) => {
    setCollections((prevCollections) => {
      return [...prevCollections, {name: newCollection, items: []}];
    });
  };

  return (
    <div className={app.grid}>
      <Collections
        collectionsArray={collections}
        onCollectionSelect={selectCollectionHandler}
        submitCollection={submitCollectionHandler}
      />
      <List items={activeCollection.items} onDeleteItem={deleteListItemHandler} submitHandler={addListItemHandler} />
    </div>
  );
}

export default App;
