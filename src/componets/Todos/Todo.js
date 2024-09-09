import { FaCheck } from 'react-icons/fa6';
import styles from './Todo.module.css'
import { RiBriefcase4Fill, RiDeleteBin3Line } from "react-icons/ri";

function Todo({task, deliteTask,togletask}){
    return (
    <div className={`${styles.todo} ${task.isComplited ? styles.completedTodo :'' }`}>
    <RiBriefcase4Fill className={styles.todoIcon}/>
    <h1 className={styles.todoText}>{task.text}</h1>
    <RiDeleteBin3Line onClick={()=>deliteTask(task.id)} className={styles.deleteIcon}/>
    <FaCheck onClick={()=>togletask(task.id)} className={styles.checkIcon}/>
    </div>)
}
export default Todo