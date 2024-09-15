import Todo from "./Todo"
import styles from './TodoList.module.css'

function TodoList({tasks, deliteTask, togletask,count}){
 return <div className={styles.todoListContainer}>
{tasks.length === 0 && <h2>List is empty!</h2>}
{tasks.map((task) => <Todo togletask={togletask} deliteTask={deliteTask} key={task.id} task={task}/>)}
{count > 0 && <h2>{`You have ${count} ${count >1 ? 'tasks':'task'} to do!`}</h2>}
 </div>
}
export default TodoList


