import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState, useEffect} from "react";
import {fetchAll, saveCollection} from "./api.jsx";

function App() {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCollections = async () => {
    try {
      const collections = await fetchAll();
      setCollections((prevCollections) => [...collections, ...prevCollections]);
      setIsLoading(false);
      setActiveCollection(collections[0]);
    } catch (error) {
      console.error(error);
    }
  };

  // const addListItemHandler = (item) => {
  //   setCollections((prevCollections) => {
  //     const updatedCollections = [...prevCollections];
  //     const index = updatedCollections.findIndex((collection) => {
  //       return collection.name === activeCollection.name;
  //     });
  //     if (index !== -1) {
  //       updatedCollections[index].items = [item, ...updatedCollections[index].items];
  //     }
  //     return updatedCollections;
  //   });
  // };

  // const deleteListItemHandler = (itemId) => {
  //   setCollections((prevCollections) => {
  //     const updatedCollections = [...prevCollections];
  //     const index = updatedCollections.findIndex((collection) => {
  //       return collection.name === activeCollection.name;
  //     });

  //     if (index !== -1) {
  //       updatedCollections[index].items = updatedCollections[index].items.filter((item) => {
  //         return item !== itemId; //TODO: update to reflex each items id when connected to db
  //       });
  //     }
  //     return updatedCollections;
  //   });
  // };

  const selectCollectionHandler = (id) => {
    setActiveCollection(collections.find((collection) => collection._id.toString() === id.toString()));
  };

  const submitCollectionHandler = async (name) => {
    const id = await saveCollection(name);
    const newCollection = {_id: id, name: name, items: []};
    setCollections((prevCollections) => [newCollection, ...prevCollections]);
  };

  useEffect(() => {
    getCollections();

    return;
  }, []);

  return (
    <div className={app.grid}>
      <Collections
        isLoading={isLoading}
        collectionsArray={collections}
        onCollectionSelect={selectCollectionHandler}
        submitCollection={submitCollectionHandler}
        activeCollection={activeCollection}
      />
      <List
        isLoading={isLoading}
        collection={activeCollection}
        // onDeleteItem={deleteListItemHandler}
        // submitHandler={addListItemHandler}
      />
    </div>
  );
}

export default App;
