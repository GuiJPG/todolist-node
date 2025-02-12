import express from "express";
import {taskRoutes} from "./controller/tasksControler.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;


app.use(taskRoutes);

app.listen(PORT, ()=>{
     console.log(`A aplicação esta rodando na porta ${PORT}`);
});