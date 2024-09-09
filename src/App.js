import './App.css';
import TodoActions from './componets/Todos/TodoActions';
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
function deliteTaskHandler(id){
  setTasks(tasks.filter((task) => task.id!==id))

}
function togleTaskHandler(id){
  setTasks(tasks.map((task)=>{
    return task.id===id? {...task, isComplited: !task.isComplited}:{...task}
  }))

}
function deleteComplitedTaskHandler(){
  setTasks(tasks.filter((task)=> !task.isComplited ))
}
function resetTaskHandler(){
  setTasks([])
}
const taskCount = tasks.filter((task)=> task.isComplited).length
console.log(taskCount)
  return (
    <div className="App">
      <h1>App for your tasks managment</h1>
     <TodoForm addTask={addTaskHandler}/>
     {tasks.length>0 && <TodoActions 
     deliteComplitedTask={deleteComplitedTaskHandler} 
     resetTask={resetTaskHandler}
     countTask={!!taskCount}/>}
     <TodoList togletask={togleTaskHandler} deliteTask={deliteTaskHandler}
     tasks={tasks}/>
    </div>
  );
}

export default App;
