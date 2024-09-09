import Button from "../UI/Button"
import { RiDeleteBin4Line, RiRefreshLine } from "react-icons/ri"
import styles from './TodoActions.module.css'

function TodoActions({deliteComplitedTask,resetTask,countTask}){
    return  <div className={styles.toDoActionsContainer}>
    <Button onClick={deliteComplitedTask} title="Reset tasks"><RiDeleteBin4Line/></Button>
    <Button onClick={resetTask} title="Clear all tasks" disabled={!countTask}><RiRefreshLine/></Button>    
    </div>
    
}
export default TodoActions