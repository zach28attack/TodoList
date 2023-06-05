import ListHeader from "./ListHeader.jsx";
import ListItem from "./ListItem.jsx";
import Class from "./List.module.css";
import Footer from "../utility/Footer.jsx";
import {useContext} from "react";
import {LoginContext} from "../utility/LoginContext.jsx";

function List(props) {
  const {isCollectionsEmpty} = useContext(LoginContext);
  return (
    <div className={Class.backgroundColor}>
      <ListHeader submitHandler={props.submitHandler} />
      <div id="list-form-root"></div>
      {!props.isLoading && !isCollectionsEmpty
        ? props.collection.items.map((item, index) =>
            item !== "" ? (
              <ListItem
                key={item.name}
                onDeleteItem={props.onDeleteItem}
                id={index}
                collectionId={props.collection._id}
              >
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
