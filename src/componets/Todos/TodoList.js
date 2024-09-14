import Todo from "./Todo"
import styles from './TodoList.module.css'

function TodoList({tasks, deliteTask}){
 return <div className={styles.todoListContainer}>
{tasks.length === 0 && <h2>List is empty!</h2>}
{tasks.map((task,index) => <Todo index={index} deliteTask={deliteTask} key={index} task={task}/>)}
 </div>
}
export default TodoList


