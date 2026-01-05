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

export const editTodo=async()=>{
  try {
    
  } catch (error) {
    
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);     //Uses the todo ID from the URL
    if (!deleteTodo) return res.status(404).json({ message: "Todo not found"});

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete" });
  }
};




