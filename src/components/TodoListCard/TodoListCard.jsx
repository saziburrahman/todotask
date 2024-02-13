import "./TodoListCard.css";
import { ImCheckmark } from "react-icons/im";
import { IoTrashOutline } from "react-icons/io5";
import TodoEditModal from "../TodoEditModal/TodoEditModal";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../../features/todoSlice.js";

const TodoListCard = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleComplete =()=>{
    dispatch(updateTodoStatus(todo))
  }
  return (
    <div className="card mb-2 TodoListCard">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span>{todo.name}</span>
            <br />
            <span>{todo.desc}</span>
          </div>
          <div className="col">
            <div className="icons">
              {todo.status===false ? <ImCheckmark className="icon" onClick={handleComplete}/>:""}
              {todo.status===false? <TodoEditModal todo={todo} />:""}
              <IoTrashOutline className="icon" onClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
