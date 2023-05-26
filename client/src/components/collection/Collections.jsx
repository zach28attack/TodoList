import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";

function Collections(props) {
  return (
    <div className={Class.border}>
      <h1 className={Class.header}>Lists</h1>
      {props.collectionsArray.map((collection) => (
        <Collection name={collection.name} key={collection.name} onCollectionSelect={props.onCollectionSelect} />
      ))}
    </div>
  );
}

export default Collections;
