import { CiEdit } from "react-icons/ci";
import "./TodoEditModal.css";

const TodoEditModal = ({ todoId }) => {
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
                Update Todo {todoId}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Edit Todo"
                aria-label="edit todo"
                aria-describedby="button-addon2"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Edit Description"
                aria-label="edit description"
                aria-describedby="button-addon2"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEditModal;
