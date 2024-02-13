import { useState } from "react";
import "./TodoMainCard.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice.js";
import NavigationTab from "../NavigationTab/NavigationTab";

const TodoMainCard = () => {
  const [todo, setTodo] = useState({ todoTitle: "", desc: "" });
  const dispatch = useDispatch();
  // const todosList = useSelector((state) => state.todos);
  // useEffect(() => {
  //   console.log(todosList.items);
  // }, [todosList]);
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
      status: false,
    };
    dispatch(addTodo(todoDetails));
    setTodo({ todoTitle: "", desc: "" });
    console.log(todoDetails);
  };
  return (
    <div className="TodoMainCard card">
      <h1 className="card-text text-center pd-4">Todo App</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Write Todo"
              aria-label="write todo"
              aria-describedby="button-addon2"
              onChange={handleChange}
              name="todoTitle"
              value={todo.todoTitle}
              required
            />
            <textarea
              className="form-control"
              placeholder="Write Description"
              aria-label="write description"
              aria-describedby="button-addon2"
              onChange={handleChange}
              value={todo.desc}
              name="desc"
            ></textarea>
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Add Todo
            </button>
          </div>
        </form>
        <NavigationTab />
        {/* {todosList.items &&
          todosList.items.map((todoItem) => (
            <TodoListCard todo={todoItem} key={todoItem.id} />
          ))} */}
      </div>
    </div>
  );
};

export default TodoMainCard;
