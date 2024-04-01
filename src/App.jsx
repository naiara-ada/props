import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import Task from './components/Task.jsx'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

 
  const addTask = (taskText) =>{
    const newTask = {
      id: tasks.length +1,
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId)=>{
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const toggleTask = (taskId)=>{
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  }
  

  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <ul>
      {tasks.map((task) =>(
        <Task  key={task.id} task={task} deleteTask={() =>deleteTask(task.id)} toggleTask={() => toggleTask(task.id)} />
      ))}
      </ul>
    </>
  );
};

export default App;
