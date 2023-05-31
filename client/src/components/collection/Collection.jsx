import Class from "./Collection.module.css";

function Collection(props) {
  const clickHandler = () => {
    props.onCollectionSelect(props.id);
  };
  return (
    <button
      onClick={clickHandler}
      className={`${Class.button} ${props.activeCollection._id === props.id ? Class.active : ""}`}
    >
      <p className={Class.name}>{props.name}</p>
    </button>
  );
}

export default Collection;
