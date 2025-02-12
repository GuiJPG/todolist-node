import {getAllModule, createTaskModule, deleteTaskModule, updateTaskModule } from "../models/tasksModel.js";

export async function getAllTaskService(){
    const data = await getAllModule();
    return data;
}

export async function postTaskService(data){
    const createdTask = await createTaskModule(data);
    console.log(data);
    return createdTask;
}

export async function deleteTaskService(id) {
    const deleteTask = await deleteTaskModule(id);
    return deleteTask;
}

export async function updateTaskService(id, data){
    const updateTask = await updateTaskModule(id, data);
    return updateTask;
    
}