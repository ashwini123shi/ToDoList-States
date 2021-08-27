import React, { useState } from "react";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoReconfirm from "./ToDoReconfirm";
import ToDoEditReconfirm from "./ToDoEditReconfirm";

//css
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  //State variable for list
  const [duplicateItem, setDuplicateItem] = useState("");
  const [duplicateEditItem, setDuplicateEditItem] = useState("");
  const [EditItemId, setEditItemId] = useState("");
  const [duplicateItemIndex, setduplicateItemIndex] = useState("");
  const [toDoList, setToDoList] = useState([]);

  //edit item block starts
  const handleEdit = (taskId, value) => {
    const srcIndex = toDoList.findIndex((item) => item.id === taskId);

    if (!!toDoList.find((item) => item.task === value)) {
      //fetch the indx of dupliacte item
      let index = toDoList.findIndex((item) => item.task === value);
      if (toDoList[index].id !== taskId) {
        setduplicateItemIndex(index + 1);
        setDuplicateEditItem(value); //value being updated is saved
        setEditItemId(taskId); //id being updated is saved
      }
    } else {
      updateToDoItem(srcIndex, value);
    }
  };
  const updateToDoItem = (index, value) => {
    let copy = [...toDoList];
    copy[index].task = value;
    console.log(copy);
    setToDoList(copy);
  };

  const handleEditDiscard = (taskItem) => {
    setDuplicateEditItem(false);
  };
  const handleDuplicateEdit = (item) => {
    let index = toDoList.findIndex((item) => item.id === EditItemId);
    updateToDoItem(index, item);
    setDuplicateEditItem(false);
  };

  //edit item block ends

  //add item block starts
  const addTaskToList = (taskItem) => {
    //set todo list
    setToDoList([
      ...toDoList,
      { id: toDoList.length + 1, task: taskItem, complete: false }
    ]);
  };

  const addDuplicateTask = (taskItem) => {
    addTaskToList(taskItem);
    setDuplicateItem(false);
  };

  const addTask = (taskItem) => {
    const duplicate = toDoList.find((item) => item.task === taskItem);
    if (!!duplicate) {
      console.log(duplicate);
      setDuplicateItem(duplicate.task);
    } else {
      addTaskToList(taskItem);
    }
  };
  //add item block ends
  //clear All items
  const handleClearAll = () => {
    setToDoList([]);
    setDuplicateItem(false);
  };
  // delete single item
  const handleDelete = (id) => {
    const updatedItems = toDoList.filter((task) => {
      return task.id !== Number(id);
    });
    setToDoList(updatedItems);
    setDuplicateItem(false);
  };
  //toggle status of item
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <Header />
          <ToDoForm addTask={addTask} isDuplicateItem={!!duplicateItem} />
          {!!duplicateItem && (
            <ToDoReconfirm
              addTaskToList={addDuplicateTask}
              handleDiscard={() => setDuplicateItem(false)}
              taskItem={duplicateItem}
            />
          )}

          {!!duplicateEditItem && (
            <ToDoEditReconfirm
              updateTaskToList={handleDuplicateEdit}
              handleEditDiscard={handleEditDiscard}
              taskItem={duplicateEditItem}
              DuplicateIndex={duplicateItemIndex}
            />
          )}
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleClearAll}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
