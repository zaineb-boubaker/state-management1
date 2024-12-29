import React, { useEffect, useRef } from "react";
import "./style.css";

function UpdateTaskForm({ title, setTasksList, tasksList, id, setShowInput }) {
  const inputRef = useRef(null);
  const handleCancel = () => {
    setShowInput(false);
  };
  const handleChange = () => {
    setTasksList(
      tasksList.map((task) => {
        console.log(task.id);
        return task.id === id
          ? { ...task, title: inputRef.current.value }
          : task;
      })
    );
    setShowInput(false);
  };

  // const handleChange = () => {
  //       inputRef.current.value

  // }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div id="formm">
      <form id="form1">
        {" "}
        <div>
          {" "}
          <input ref={inputRef} defaultValue={title} type="text" />
        </div>
        <div id="but">
          <button onClick={handleChange}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTaskForm;
