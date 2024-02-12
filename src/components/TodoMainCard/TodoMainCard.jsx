import TodoListCard from "../TodoListCard/TodoListCard";
import "./TodoMainCard.css";

const TodoMainCard = () => {
  return (
    <div className="TodoMainCard card">
      <h1 className="card-text text-center pd-4">Todo App</h1>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Write Todo"
            aria-label="write todo"
            aria-describedby="button-addon2"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Write Description"
            aria-label="write description"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-primary" type="button" id="button-addon2">
            Add Todo
          </button>
        </div>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
        <TodoListCard/>
      </div>
    </div>
  );
};

export default TodoMainCard;
