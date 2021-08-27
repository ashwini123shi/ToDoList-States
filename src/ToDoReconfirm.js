import React from "react";

const ToDoReconfirm = ({ addTaskToList, handleDiscard, taskItem }) => {
  return (
    <div className="card card-body my-3">
      <h5>Dupicate task {taskItem}, Still you want to Add?</h5>
      <div className="row">
        <span
          onClick={() => addTaskToList(taskItem)}
          className="mx-2 text-success cursor-ptr"
        >
          Add
        </span>

        <span onClick={handleDiscard} className="mx-2 text-danger cursor-ptr">
          Discard
        </span>
      </div>
    </div>
  );
};
export default ToDoReconfirm;
