import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Unable to create todo" });
  }
};

export const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // { title: "titlename", completed: true }

    if (updates.title !== undefined && typeof updates.title !== "string") {
      return res.status(400).json({ message: "Invalid title" });
    }

    const updated = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ message: "Todo not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Unable to edit todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id); //Uses the todo ID from the URL
    if (!deleteTodo) return res.status(404).json({ message: "Todo not found" });

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete" });
  }
};
