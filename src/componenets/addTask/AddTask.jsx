import React from "react";
import Add from "../dialog/Add";

function AddTask({ setTasksList, tasksList, setCategory, category }) {
  return (
    <div>
      <Add
        setTasksList={setTasksList}
        tasksList={tasksList}
        setCategory={setCategory}
        category={category}
      />
    </div>
  );
}

export default AddTask;
