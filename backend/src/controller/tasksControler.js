import express from "express";
import {validadeFieldTitle, validadeFieldStatus} from "../middlewares/tasksMiddlewares.js"
import {updateTaskService, deleteTaskService, getAllTaskService, postTaskService } from "../service/tasksService.js";

export const taskRoutes = express.Router();

taskRoutes.get("/tasks", async (req, res) => {
    const tasks = await getAllTaskService();
    res.status(200).send(tasks);
});

taskRoutes.post("/add", validadeFieldTitle, async (req, res) =>{
    const data = req.body;
    const response = await postTaskService(data);
    console.log(response);
    res.status(200).send(response);
});

taskRoutes.delete("/tasks/:id", async (req, res) =>{
    const id = req.params.id;
    const response = await deleteTaskService(id);
    res.status(204).send(response);
});

taskRoutes.put("/tasks/:id", validadeFieldTitle, validadeFieldStatus, (req, res) =>{
    const id = req.params.id;
    const data = req.body;
    const response = updateTaskService(id, data);
    res.status(204).send(response);
});

