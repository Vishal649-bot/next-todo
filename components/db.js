// File: db.js
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

const todoSchema = new mongoose.Schema({
    task: String,
    done: Boolean,
});

export const Todo = mongoose.models.todo || mongoose.model("todo", todoSchema);
