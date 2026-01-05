import express from "express"
import { createTodo, deleteTodo, getTodos } from "../controllers/todoController.js"


const router=express.Router()

router.get("/",getTodos);
router.post("/",createTodo)
router.delete("/:id",deleteTodo)

export default router;

