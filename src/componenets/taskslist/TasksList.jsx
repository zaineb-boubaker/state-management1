import React, { useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import "./style.css";

function TasksList({ tasksList, setTasksList }) {
  const [doneFilter, setDoneFilter] = useState(false);
  const [undoneFilter, setUndoneFilter] = useState(false);
  const handlenofilter = () => {
    setDoneFilter(false);
    setUndoneFilter(false);
  }
  const handlefilterdone = () => {
    setDoneFilter(true);
        setUndoneFilter(false);

  }
  const handlefilterundone = () => {
    setUndoneFilter(true);
        setDoneFilter(false);

  }
  return (
    <div id="taskslist">
      <div id="filter">
        {doneFilter || undoneFilter ? (
          <img
            src="/images/back (3).png"
            alt=""
            width="25px"
            onClick={handlenofilter}
          />
        ) : (
          <div id="filterbut">
            <button onClick={handlefilterdone}>Done</button>
            <button onClick={handlefilterundone}>Undone</button>{" "}
          </div>
        )}
      </div>
      {tasksList.length > 0 ? (
        tasksList
          .filter((elt) => (doneFilter ? elt.isDone : undoneFilter ? !elt.isDone : elt))
          .map((task, i) => (
            <TaskItem
              setTasksList={setTasksList}
              tasksList={tasksList}
              key={i}
              {...task}
            />
          ))
      ) : (
        <div id="motv">
          <img src="/images/kitty.png" alt="" width="50px" />
          <h3>Add Your Tasks Baby</h3>
        </div>
      )}
    </div>
  );
}

export default TasksList;
