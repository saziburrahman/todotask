import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todoSlice";
import "./TodoEditModal.css";

const TodoEditModal = ({ todo }) => {
  const [updateTodoData, setUpdateTodoData] = useState({
    name: todo.name,
    desc: todo.desc,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdateTodoData({
      ...updateTodoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: todo.id,
        name: updateTodoData.name,
        desc: updateTodoData.desc,
      })
    );
  };

  return (
    <>
      <CiEdit
        className="icon"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdate}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Edit Todo"
                    aria-label="edit todo"
                    aria-describedby="button-addon2"
                    name="name"
                    value={updateTodoData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Edit Description"
                    aria-label="edit description"
                    aria-describedby="button-addon2"
                    name="desc"
                    value={updateTodoData.desc}
                    onChange={handleChange}
                  />
                </div>
                <div className="modalButton">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEditModal;
