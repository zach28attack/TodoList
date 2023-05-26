import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";

function Collections(props) {
  return (
    <div className={Class.border}>
      <h1 className={Class.header}>Lists</h1>
      {props.collections.map((item) => (
        <Collection title={item} key={item} />
      ))}
    </div>
  );
}

export default Collections;
