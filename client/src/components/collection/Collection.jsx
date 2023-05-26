import Class from "./Collection.module.css";

function Collection(props) {
  const clickHandler = () => {
    props.onCollectionSelect(props.name);
  };
  return (
    <button onClick={clickHandler} className={Class.button}>
      <p className={Class.collection}>{props.name}</p>
    </button>
  );
}

export default Collection;
