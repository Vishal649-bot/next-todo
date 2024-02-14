// pages/index.js
import { useState } from 'react';
import TodoList from '../components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTodo = () => {
    if (taskInput.trim() !== '') {
      setTodos([...todos, { task: taskInput, done: false }]);
      setTaskInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
      <h2>Todo List</h2>
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
}
