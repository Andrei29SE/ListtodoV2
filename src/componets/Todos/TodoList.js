import Todo from "./Todo"
import styles from './TodoList.module.css'

function TodoList({tasks, deliteTask, togletask}){
 return <div className={styles.todoListContainer}>
{tasks.length === 0 && <h2>List is empty!</h2>}
{tasks.map((task) => <Todo togletask={togletask} deliteTask={deliteTask} key={task.id} task={task}/>)}

 </div>
}
export default TodoList


