// components/Todo.js
import { useState } from 'react';

const Todo = ({ task, done, onDelete, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={done} onChange={onToggle} />
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
