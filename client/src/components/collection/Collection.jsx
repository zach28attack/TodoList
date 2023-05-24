import Class from "./Collection.module.css";

function Collection(props) {
  return <p className={Class.collection}>{props.title}</p>;
}

export default Collection;
