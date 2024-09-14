import './App.css';
import TodoForm from './componets/Todos/TodoForm';
import TodoList from './componets/Todos/TodoList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
const [tasks, setTasks] = useState([])

function addTaskHandler(text){
  const newTodo={
    text:text,
    isComplited:false,
    id:uuidv4()
  }
  setTasks([...tasks,newTodo])
}
function deliteTaskHandler(index){
  setTasks(tasks.filter((_,ind) => ind!==index))

}
  return (
    <div className="App">
      <h1>App for your tasks managment</h1>
     <TodoForm addTask={addTaskHandler}/>
     <TodoList deliteTask={deliteTaskHandler}
     tasks={tasks}/>
    </div>
  );
}

export default App;
