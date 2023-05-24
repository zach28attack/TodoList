import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
function App() {
  return (
    <div className={app.grid}>
      <Collections />
      <List />
    </div>
  );
}

export default App;
