// components/TodoList.js
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          task={todo.task}
          done={todo.done}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
