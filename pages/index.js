// pages/index.js
import { useState } from "react";
import TodoList from "../components/TodoList";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTodo = async () => {
        if (taskInput.trim() !== "") {
            setTodos([...todos, { task: taskInput, done: false }]);
            setTaskInput("");

            const pureData = { task: taskInput, done: false };
            const storeDatabase = await fetch(
                "http://localhost:3000/api/todo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pureData),
                }
            );
            const getDatabase = await fetch("http://localhost:3000/api/todo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const deleteDatabase = await fetch(
                "http://localhost:3000/api/todo/?id=65ce20c3ac638116f3709a9e",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // const trueData = await deleteDatabase.json();
            // console.log(trueData);
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
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
            />
        </div>
    );
}
