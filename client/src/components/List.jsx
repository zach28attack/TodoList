import Class from "./List.module.css";
import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";

function List() {
  const items = ["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"];
  return (
    <>
      <div>
        <ListHeader />
        {items.map((item) => (
          <ListItem title={item} />
        ))}
      </div>
    </>
  );
}

export default List;
