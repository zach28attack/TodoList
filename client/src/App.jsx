import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState, useEffect} from "react";
import {fetchAll} from "./api.jsx";

function App() {
  useEffect(() => {
    const getCollections = async () => {
      try {
        const collections = await fetchAll();
        setCollections((prevCollections) => [...collections, ...prevCollections]);
        {
          console.log("app.jsx:", collections[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCollections();

    return;
  }, []);

  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  // const selectCollectionHandler = (name) => {
  //   console.log("collection selection temporarily commented out");
  // };

  // const submitCollectionHandler = (newCollection) => {
  //   setCollections((prevCollections) => {
  //     return [...prevCollections, {name: newCollection, items: []}];
  //   });
  // };

  return (
    <div className={app.grid}>
      <Collections
        isLoading={isLoading}
        collectionsArray={collections}
        // onCollectionSelect={selectCollectionHandler}
        // submitCollection={submitCollectionHandler}
        activeCollection={activeCollection}
      />
      {console.log("app.jsx:body", collections)}
      <List
        isLoading={isLoading}
        collection={collections[0]}
        // onDeleteItem={deleteListItemHandler}
        // submitHandler={addListItemHandler}
      />
    </div>
  );
}

export default App;
