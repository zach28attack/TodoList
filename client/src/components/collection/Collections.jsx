import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";
import CollectionForm from "../utility/CollectionForm.jsx";
import {useState} from "react";
import {RiAddCircleLine} from "react-icons/ri";

function Collections(props) {
  const [isRotated, setIsRotated] = useState(false);
  const submitCollectionHandler = (e) => {
    props.submitCollection(e);
    setIsRotated(!isRotated);
    setFormVisible(!formVisible);
  };
  const [formVisible, setFormVisible] = useState(false);
  const formVisibleHandler = () => {
    setFormVisible(!formVisible);
    setIsRotated(!isRotated);
  };
  return (
    <div className={Class.border}>
      <h1 className={Class.header}>
        Lists
        <button className={`${Class.button}`} onClick={formVisibleHandler}>
          <RiAddCircleLine className={`${Class.buttonOrigin} ${isRotated ? Class.rotate : undefined}`} />
        </button>
      </h1>

      <CollectionForm submitCollection={submitCollectionHandler} formVisible={formVisible} />
      {props.collectionsArray.map((collection) => (
        <Collection
          name={collection.name}
          key={collection.name}
          onCollectionSelect={props.onCollectionSelect}
          activeCollection={props.activeCollection}
        />
      ))}
    </div>
  );
}

export default Collections;
