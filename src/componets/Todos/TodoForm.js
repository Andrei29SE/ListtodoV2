import { useState } from "react"
import styles from './TodoForm.module.css'
import Button from "../UI/Button"

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
        <Button type="submit" title="Submit">Submit</Button>
        </form>
     </div>
    
   
)}
export default TodoForm