import { useState } from "react"
import styles from './TodoForm.module.css'

function TodoForm({addTask}){
    const [text, setText] = useState('')
    
    const handleOnSubmit = (e)=>{
        e.preventDefault()  
        addTask(text)
        setText('')
    }
    
    return (
    <div className={styles.todoFormContainer}>
        <form onSubmit={handleOnSubmit} >
        <input 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder="Enter new task">
        </input>
        <button type="submit">Submit</button>
        </form>
     </div>
    
   
)}
export default TodoForm