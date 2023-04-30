import { useForm } from "react-hook-form";

export function TaskFormPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data)
    });

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
        </div>
    );
};
