import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <Link to="/tasks">
                <h3>Task List</h3>
            </Link>
            <Link to="/tasks-create">Create Task</Link>
        </div>
    );
};
