import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";
import CollectionForm from "../utility/CollectionForm.jsx";
import {useState, useContext} from "react";
import {RiAddCircleLine} from "react-icons/ri";
import {AiOutlineLoading} from "react-icons/ai";
import {LoginContext} from "../utility/LoginContext.jsx";

function Collections(props) {
  const [isRotated, setIsRotated] = useState(false);
  const {loggedIn, isCollectionsEmpty} = useContext(LoginContext);

  const submitCollectionHandler = (name) => {
    props.submitCollection(name);
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
        {loggedIn && (
          <button className={`${Class.button}`} onClick={formVisibleHandler}>
            <RiAddCircleLine className={`${Class.buttonOrigin} ${isRotated ? Class.rotate : undefined}`} />
          </button>
        )}
      </h1>
      {formVisible && <CollectionForm submitCollection={submitCollectionHandler} />}

      {!props.isLoading && !isCollectionsEmpty ? (
        props.collectionsArray.map((collection) => (
          <Collection
            name={collection.name}
            key={collection._id}
            id={collection._id}
            onCollectionSelect={props.onCollectionSelect}
            activeCollection={props.activeCollection}
          />
        ))
      ) : loggedIn && !isCollectionsEmpty ? (
        <AiOutlineLoading className={Class.loading} />
      ) : undefined}
    </div>
  );
}

export default Collections;
