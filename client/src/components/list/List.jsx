import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";
import Class from "./List.module.css";
import Footer from "../utility/Footer.jsx";

function List(props) {
  return (
    <div className={Class.backgroundColor}>
      <ListHeader submitHandler={props.submitHandler} />
      <div id="list-form-root"></div>
      {!props.isLoading
        ? props.collection.items.map((item) =>
            item !== "" ? (
              <ListItem key={item.name} onDeleteItem={props.onDeleteItem} id={item.name}>
                {item.name}
              </ListItem>
            ) : undefined
          )
        : undefined}
      <Footer />
    </div>
  );
}

export default List;
