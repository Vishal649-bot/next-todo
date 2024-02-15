import { Todo } from "../../components/db";

export default async (req, res) => {
    if (req.method === "POST") {
        // Create a new todo
        const newTodo = new Todo(req.body);

        // console.log("=================================");
        // console.log("Post called");
        // console.log("=================================");

        try {
            await newTodo.save();
            res.status(201).json({ message: true });
        } catch (error) {
            res.status(500).json({ message: false });
        }
    } else if (req.method === "DELETE") {
        // Delete todo by ID
        const todoId = req.query.id;
        // console.log("=================================");
        // console.log("delete called", todoId);
        // console.log("=================================");
        try {
            await Todo.findByIdAndDelete(todoId);
            res.status(200).json({ message: "Todo deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: false });
        }
    } else if (req.method === "GET") {
        // Get all todos
        // console.log("=================================");
        // console.log("get called");
        // console.log("=================================");
        try {
            const todos = await Todo.find();
            console.log(todos);
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: false });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
};
