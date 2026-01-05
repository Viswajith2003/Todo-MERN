import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import connectDB from "./config/db.js";

const app = express();

import dotenv from "dotenv";
dotenv.config();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(express.json());

// Test route to verify server is working
app.get("/test", (req, res) => res.send("Test route working"));

//Routes
app.use("/api/todos", todoRoutes);

connectDB();

// Use 5001 by default because port 5000 is commonly used by local Docker registries
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
