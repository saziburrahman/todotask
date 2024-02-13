import { useEffect, useState } from "react";
import TodoListCard from "../TodoListCard/TodoListCard";
import "./TodoMainCard.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice.js";

const TodoMainCard = () => {
  const [todo, setTodo] = useState({ todoTitle: "", desc: "" });
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos);
  useEffect(() => {
    console.log(todosList.items);
  }, [todosList]);
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.todoTitle || !todo.desc) {
      alert("field Must be required");
      return;
    }
    const todoDetails = {
      id: uuidv4(),
      name: todo.todoTitle,
      desc: todo.desc,
    };
    dispatch(addTodo(todoDetails));
    console.log(todoDetails);
  };
  return (
    <div className="TodoMainCard card">
      <h1 className="card-text text-center pd-4">Todo App</h1>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write Todo"
            aria-label="write todo"
            aria-describedby="button-addon2"
            onChange={handleChange}
            name="todoTitle"
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Write Description"
            aria-label="write description"
            aria-describedby="button-addon2"
            onChange={handleChange}
            name="desc"
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        </div>
        {todosList.items &&
          todosList.items.map((todoItem) => (
            <TodoListCard todo={todoItem}/>
          ))}
        {/* <TodoListCard />
        <TodoListCard />
        <TodoListCard />
        <TodoListCard />
        <TodoListCard />
        <TodoListCard />
        <TodoListCard />
        <TodoListCard /> */}
      </div>
    </div>
  );
};

export default TodoMainCard;
