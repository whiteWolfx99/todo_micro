import { useState } from 'react';
import './index.css';
import { Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Todo from './components/Todo';
import Menu from './assets/images/Menu.svg';
import Menu2 from './assets/images/Menu2.svg';

function App() {
  const [isexpand, setIsexpand] = useState(false);

  function expand() {
    setIsexpand(!isexpand);
  }

  return (
    <div className="App">
      <div className="row">
        <div className={isexpand ? 'display-none' : 'col-1'}>
          <div className="drawer">
            <h6>Links</h6>
            <div className="display-link">
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/">Todo</Link>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="appbar">
            <button onClick={expand} className="expand-colapse-button" type="button">
              {' '}
              {isexpand ? <img src={Menu} alt="menu" /> : <img src={Menu2} alt="menu2" />}
              {' '}
            </button>
            <div className="appbar-title">
              <h1>Todo App</h1>
            </div>
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
