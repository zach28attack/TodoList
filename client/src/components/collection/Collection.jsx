import Class from "./Collection.module.css";

function Collection(props) {
  const clickHandler = () => {
    props.onCollectionSelect(props.name);
  };
  return (
    <button className={Class.collection} onClick={clickHandler}>
      {props.name}
    </button>
  );
}

export default Collection;
