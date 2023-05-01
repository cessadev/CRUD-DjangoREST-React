import axios from "axios";

const tasksApiURL = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => tasksApiURL.get("/");

export const getTask = (id: number) => tasksApiURL.get(`/${id}/`);

export const createTask = (task: object) => tasksApiURL.post("/", task);

export const deleteTask = (id: number) => tasksApiURL.delete(`/${id}`);

export const updateTask = (id: number, task: object) => tasksApiURL.put(`/${id}/`, task);