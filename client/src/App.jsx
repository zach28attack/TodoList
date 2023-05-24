import app from "./App.module.css";
import Collections from "./components/Collections";
import List from "./components/List";
function App() {
  return (
    <div className={app.grid}>
      <Collections />
      <List />
    </div>
  );
}

export default App;
