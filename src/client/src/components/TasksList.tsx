import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

type Task = {
    id: number;
    title: string;
    description: string;
};

export function TasksList(): any {
    const [tasks, setTasks] = useState<Task[]>();
    useEffect(() => {
        async function loadTasks() {
            const response = await getAllTasks();
            setTasks(response.data);
        }
        loadTasks();
    }, []);
    return (
        <div>
            {tasks && tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};
