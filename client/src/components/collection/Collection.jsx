import Class from "./Collection.module.css";

function Collection(props) {
  const clickHandler = () => {
    props.onCollectionSelect(props.name);
  };
  return (
    <button onClick={clickHandler} className={Class.button}>
      <p className={Class.name}>{props.name}</p>
    </button>
  );
}

export default Collection;
