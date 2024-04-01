import { useState } from 'react';

function AddTaskForm ({addTask}){
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        addTask(taskText.trim())
        setTaskText('');

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskText} onChange={(event) => setTaskText(event.target.value)} placeholder="Agregar nueva tarea"/>
                <button type="submit" >Agregar </button>
            </form>
            
        </>
    )
}

export default AddTaskForm