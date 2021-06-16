import React, { useState, useEffect } from 'react';
import AddTodo from './components/addtodo/AddTodo';
import TodoList from './components/todolist/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todo')));
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  });

  const changeStatus = e => {
    const copyTodos = [...todos];
    const updateIndex = copyTodos.findIndex(i => i.id === e.target.id);
    if (copyTodos[updateIndex].status === 'active') {
      copyTodos[updateIndex].status = 'done';
    } else {
      copyTodos[updateIndex].status = 'active';
    }
    setTodos(copyTodos);
  };

  const removeTodo = e => {
    e.stopPropagation();
    const newTodos = todos.filter(todo => todo.id !== e.target.id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <AddTodo todos={todos} setTodos={setTodos} />
      {todos.length > 0 && (
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        removeTodo={removeTodo} />
      )}
    </div>
  );
};

export default App;
