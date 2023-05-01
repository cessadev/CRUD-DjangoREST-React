import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm();

    const navigate = useNavigate();

    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTask(Number(params.id), data);
        } else {
            await createTask(data);
        };
        navigate("/tasks")
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data: { title, description } } = await getTask(Number(params.id));
                setValue("title", title);
                setValue("description", description);
            };
        };
        loadTask();
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>Title is required</span>}
                <textarea
                    placeholder="description"
                    cols={30}
                    rows={10}
                    {...register("description", { required: true })}>
                </textarea>
                {errors.description && <span>Description is required</span>}
                <button>Save</button>
            </form>
            {
                params.id && <button onClick={async () => {
                    const accepted = window.confirm("Are you sure?");
                    if (accepted) {
                        await deleteTask(Number(params.id));
                        navigate("/tasks");
                    };
                }}>Delete</button>
            }
        </div>
    );
};
