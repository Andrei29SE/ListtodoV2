import './App.css';
import TodoForm from './componets/Todos/TodoForm';
import TodoList from './componets/Todos/TodoList';
import { useState } from 'react';

function App() {
const [tasks, setTasks] = useState([])

function addTaskHandler(text){
  setTasks([...tasks,text])
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
