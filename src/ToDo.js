import React, { useState } from "react";

const ToDo = ({
  todo,
  handleToggle,
  handleFilter,
  handleDelete,
  handleEdit
}) => {
  const [isShown, setIsShown] = useState(true);
  const updateItem = (e) => {
    handleEdit(todo.id, e.currentTarget.value);
    setIsShown(!isShown);
  };

  return (
    <>
      <div className={todo.complete ? "textBlock strike" : "textBlock"}>
        {isShown && <div onClick={() => setIsShown(!isShown)}>{todo.task}</div>}
        {!isShown && (
          <input
            type="text"
            onMouseOver={(e) => (e.target.style.fontStyle = "italic")}
            onMouseLeave={(e) => (e.target.style.fontStyle = "normal")}
            onBlur={updateItem}
            defaultValue={todo.task}
            id={todo.id}
          />
        )}
      </div>

      <div className="actionBlock">
        <span className="mx-2 text-success cursor-ptr">
          <i
            id={todo.id}
            name="todoStatus"
            value={todo.id}
            onClick={(e) => handleToggle(e.currentTarget.id)}
            className="fa fa-check"
            aria-hidden="true"
          ></i>
        </span>
        <span className="mx-2 text-danger cursor-ptr">
          <i
            id={todo.id}
            name="todoDelete"
            value={todo.id}
            onClick={(e) => handleDelete(e.currentTarget.id)}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </>
  );
};

export default ToDo;
