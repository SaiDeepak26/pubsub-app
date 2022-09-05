import "./App.css";
import Actors from "../src/components/actors";
import Alert from "../src/components/alert";
import Input from "../src/components/inputForm";
import Movies from "../src/components/movies";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <Input />
        <Alert />
      </div>
      <div className="listContainer">
        <div>
          <Movies />
        </div>
        <div>
          <Actors />
        </div>
      </div>
    </div>
  );
}

export default App;
