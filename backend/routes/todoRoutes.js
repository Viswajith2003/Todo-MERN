import express from "express"
import { createTodo, deleteTodo, editTodo, getTodos } from "../controllers/todoController.js"


const router=express.Router()

router.get("/",getTodos);
router.post("/",createTodo)
router.delete("/:id",deleteTodo)
router.put('/:id',editTodo)

export default router;

