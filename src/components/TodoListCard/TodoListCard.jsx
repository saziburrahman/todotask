import "./TodoListCard.css";
import { ImCheckmark } from "react-icons/im";
import { IoTrashOutline } from "react-icons/io5";
import TodoEditModal from "../TodoEditModal/TodoEditModal";

const TodoListCard = () => {
  return (
    <div className="card mb-2 TodoListCard">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span>Todo message</span>
            <br />
            <span>Todo Description</span>
          </div>
          <div className="col">
            <div className="icons">
              <ImCheckmark className="icon" />
              <TodoEditModal />
              <IoTrashOutline className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
