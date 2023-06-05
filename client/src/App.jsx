import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState, useEffect} from "react";
import {fetchAll, saveCollection, saveItem, deleteItemByIndex} from "./api.jsx";
import {LoginContextProvider} from "./components/utility/LoginContext";

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

  const addListItemHandler = (itemName) => {
    // console.log("addListItemHandler invoked", itemName, activeCollection._id);
    saveItem(itemName, activeCollection._id);
    setCollections((prevCollections) => {
      const updatedCollections = [...prevCollections];
      const index = updatedCollections.findIndex((collection) => {
        return collection._id === activeCollection._id;
      });
      if (index !== -1) {
        updatedCollections[index].items = [{name: itemName, isCompleted: false}, ...updatedCollections[index].items];
        return updatedCollections;
      }
    });
  };

  const deleteListItemHandler = (itemIndex, collectionId) => {
    deleteItemByIndex(itemIndex, collectionId);
    setCollections((prevCollections) => {
      const updatedCollections = [...prevCollections];
      const index = updatedCollections.findIndex((collection) => {
        return collection._id === collectionId;
      });
      if (index !== -1) {
        updatedCollections[index].items = updatedCollections[index].items.filter((item, index) => {
          return index !== itemIndex; //TODO: update to reflex each items id when connected to db
        });
      }
      return updatedCollections;
    });
  };

  const selectCollectionHandler = (id) => {
    setActiveCollection(collections.find((collection) => collection._id.toString() === id.toString()));
  };

  const submitCollectionHandler = async (name) => {
    const id = await saveCollection(name);
    const newCollection = {_id: id, name: name, items: []};
    setCollections((prevCollections) => [newCollection, ...prevCollections]);
  };

  // DeleteCollection handler

  useEffect(() => {
    getCollections();

    return;
  }, []);

  return (
    <LoginContextProvider>
      {/* TODO: check if syntax for context api is correct */}
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
          onDeleteItem={deleteListItemHandler}
          submitHandler={addListItemHandler}
        />
      </div>
    </LoginContextProvider>
  );
}

export default App;
