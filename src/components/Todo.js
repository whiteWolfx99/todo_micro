import React, { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState('');
  const [isEdit, setIsedit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      const id = Math.floor(Math.random() * 1000);
      const newTodo = { id, todo };
      setTodos([...todos, newTodo]);
      setTodo('');
    } else {
      alert('Please enter a todo');
    }
  };

  const EditTask = () => {
    if (editTodo !== '') {
      const filterRecord = [...todos].filter(
        (todo) => todo.id !== editTodo.id,
      );
      const editedobject = [...filterRecord, editTodo];
      setTodos(editedobject);
      setEditTodo('');
    }
    setIsedit(false);
  };

  const changeTask = (e) => {
    const newEntry = {
      id: editTodo.id,
      todo: e.target.value,
    };
    setEditTodo(newEntry);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo">

      <div className="input-todo">
        <input
          placeholder="todo..."
          type="text"
          maxLength="10"
          value={isEdit ? editTodo.todo : todo}
          onChange={isEdit ? (e) => changeTask(e) : (e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={isEdit ? EditTask : handleSubmit}>{isEdit ? 'save' : 'add'}</button>
      </div>

      <div className="content">
        {todos.sort((a, b) => a.id - b.id).map((item) => (
          <div key={item.id} className="todo-item">
            <input type="checkbox" />
            <p className="todo-paragraph">{item.todo}</p>
            <div className="edit-delete">
              <button
                type="button"
                onClick={() => {
                  setEditTodo(item);
                  setIsedit(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} type="button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
