import React from "react";

const ToDoEditReconfirm = ({
  updateTaskToList,
  handleEditDiscard,
  taskItem,
  DuplicateIndex
}) => {
  return (
    <div className="card card-body my-3">
      <h5>
        Dupicate task {taskItem} at {DuplicateIndex}, Still you want to Update?
      </h5>
      <div className="row">
        <span
          onClick={() => updateTaskToList(taskItem)}
          className="mx-2 text-success cursor-ptr"
        >
          Add
        </span>

        <span
          onClick={() => handleEditDiscard(taskItem)}
          className="mx-2 text-danger cursor-ptr"
        >
          Discard
        </span>
      </div>
    </div>
  );
};
export default ToDoEditReconfirm;
