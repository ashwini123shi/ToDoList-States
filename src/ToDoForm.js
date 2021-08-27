import React, { useState } from "react";

const ToDoForm = ({ addTask, isDuplicateItem }) => {
  const [userInput, setUserInput] = useState(undefined);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (userInput !== "") {
      addTask(userInput);
      setUserInput("");
    }
  };
  return (
    <div className="card card-body my-3">
      <div className="input-group">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
          disabled={isDuplicateItem}
        />
        <div className="input-group-postpend">
          <div
            //disabled={isDuplicateItem}
            onClick={handleSubmit}
            className="input-group-text bg-primary text-white"
          >
            <i className="fa fa-plus "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
