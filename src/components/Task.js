import React, {useContext} from 'react';
import { TaskListContext } from "../context/TaskListContext"

const Task = (props) => {
    const { removeTask, findItem } = useContext(TaskListContext)

    return (
        <li className="list-item">
            <span>{props.task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={() => removeTask(props.task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button onClick={() => findItem(props.task.id)} className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
}

export default Task;