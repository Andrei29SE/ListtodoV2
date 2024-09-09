import Button from "../UI/Button"
import { RiDeleteBin4Line, RiRefreshLine } from "react-icons/ri"
function TodoActions(){
    return <>
    <Button title="Reset tasks"><RiDeleteBin4Line/></Button>
    <Button title="Clear all tasks"><RiRefreshLine/></Button>    
    </>
    
}
export default TodoActions