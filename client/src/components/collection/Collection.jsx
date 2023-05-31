import Class from "./Collection.module.css";

function Collection(props) {
  const clickHandler = () => {
    console.log(props.id);
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
