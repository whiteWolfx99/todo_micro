import "./index.css";
import About from "./components/About";
import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="col-1">
        <h1>React Router</h1>
      </div>
      <div className="colo-2">
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
