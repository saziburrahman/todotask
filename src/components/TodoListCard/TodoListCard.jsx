import "./TodoListCard.css";
import { ImCheckmark } from "react-icons/im";
import { IoTrashOutline } from "react-icons/io5";
import TodoEditModal from "../TodoEditModal/TodoEditModal";

const TodoListCard = ({ todo }) => {
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
              <ImCheckmark className="icon" />
              <TodoEditModal todoId={todo.id} />
              <IoTrashOutline className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
