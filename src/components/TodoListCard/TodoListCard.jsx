import "./TodoListCard.css";

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
              <span>icon</span>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
