import Class from "./List.module.css";
import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";

function List() {
  const items = ["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"];
  return (
    <>
      <div>
        <ListHeader />
        <div id="list-form-root"></div>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem> //update key with id
        ))}
      </div>
    </>
  );
}

export default List;
