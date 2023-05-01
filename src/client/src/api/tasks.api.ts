import axios from "axios";

const tasksApiURL = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => tasksApiURL.get("/");

export const createTask = (task: object) => tasksApiURL.post("/", task);