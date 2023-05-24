import Collection from "./Collection.jsx";
import Class from "./Collections.module.css";

function Collections() {
  let collections = ["Work", "Home", "Hobby", "Health"];
  return (
    <div className={Class.border}>
      <h1 className={Class.header}>Collections</h1>
      {collections.map((item) => (
        <Collection title={item} />
      ))}
    </div>
  );
}

export default Collections;
