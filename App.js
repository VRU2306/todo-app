import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/Todos';


function App() {
  let [todos, setTodo] = useState([])

  function submitTodo(todo) {
    setTodo([...todos, todo])
  }
  return (
    <>
      <AddTodo submitTodo={submitTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
