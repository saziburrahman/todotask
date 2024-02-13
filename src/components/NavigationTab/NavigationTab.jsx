import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListCard from "../TodoListCard/TodoListCard";
import "./NavigationTab.css";

const NavigationTab = () => {
  const todosList = useSelector((state) => state.todos);
  useEffect(() => {
    console.log(todosList.items);
  }, [todosList]);
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Todo
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Complete
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {todosList.items &&
            todosList.items.map((todoItem) =>
              todoItem.status === false ? (
                <TodoListCard todo={todoItem} key={todoItem.id} />
              ) : (
                ""
              )
            )}
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          {todosList.items &&
            todosList.items.map((todoItem) =>
              todoItem.status === true ? (
                <TodoListCard todo={todoItem} key={todoItem.id} />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </>
  );
};

export default NavigationTab;
