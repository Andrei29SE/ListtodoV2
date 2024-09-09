import styles from './Todo.module.css'
import { RiBriefcase4Fill } from "react-icons/ri";

function Todo({task, deliteTask,index}){
    return (
    <div onDoubleClick={()=>deliteTask(index)} className={styles.todo}>
    <RiBriefcase4Fill className={styles.todoIcon}/>
    <h1 className={styles.todoText}>{task}</h1>
    </div>)
}
export default Todo