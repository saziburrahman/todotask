import { CiEdit } from "react-icons/ci";
import "./TodoEditModal.css";

const TodoEditModal = () => {
  return (
    <>
      <CiEdit
        className="icon"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      />

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Update Todo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                class="form-control"
                placeholder="Edit Todo"
                aria-label="edit todo"
                aria-describedby="button-addon2"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Edit Description"
                aria-label="edit description"
                aria-describedby="button-addon2"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
