import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";
import CollectionForm from "../utility/CollectionForm.jsx";

function Collections(props) {
  const submitCollectionHandler = (e) => {
    props.submitCollection(e);
  };
  return (
    <div className={Class.border}>
      <h1 className={Class.header}>Lists</h1>
      <CollectionForm submitCollection={submitCollectionHandler} />
      {props.collectionsArray.map((collection) => (
        <Collection name={collection.name} key={collection.name} onCollectionSelect={props.onCollectionSelect} />
      ))}
    </div>
  );
}

export default Collections;
