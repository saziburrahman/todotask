import "./TodoMainCard.css";

const TodoMainCard = () => {
  return (
    <div className="TodoMainCard card">
      <h1 className="card-text text-center pd-4">Todo App</h1>
      <div className="card-body">
        <div class="input-group mb-3">
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
          <button class="btn btn-primary" type="button" id="button-addon2">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoMainCard;
