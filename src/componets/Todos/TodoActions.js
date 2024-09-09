import Button from "../UI/Button"
import { RiDeleteBin4Line, RiRefreshLine } from "react-icons/ri"
function TodoActions({deliteComplitedTask,resetTask}){
    return <>
    <Button onClick={deliteComplitedTask} title="Reset tasks"><RiDeleteBin4Line/></Button>
    <Button onClick={resetTask} title="Clear all tasks"><RiRefreshLine/></Button>    
    </>
    
}
export default TodoActions