function Task ({task, deleteTask, toggleTask}){
    return(
        <>
        <li>
            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}} onClick={toggleTask}>
            {task.text}
            </span>
            <button onClick={deleteTask}>Eliminar</button>
        </li>
        </>
    )
}

export default Task;