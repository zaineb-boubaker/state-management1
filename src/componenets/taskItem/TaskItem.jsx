import React, { useState } from "react";
import "./style.css";
import UpdateTaskForm from "../updateTaskForm/UpdateTaskForm";

function TaskItem({ id, title, description, isDone, setTasksList, tasksList }) {
 
  // const handleSetTaskDone = () => {
  //   setTasksList(tasksList.map((task) => task.id === id ? {...task,isDone:true} : task));
  // };

  const handleDelete = () => {
    const confirmDelete = confirm("are you sure you want to delete this task")
    if (confirmDelete) {
       setTasksList(
         tasksList.filter((task) => {
           console.log(task.id);
           return task.id !== id ;
         })
       );
    }
  }

 const handleSetTaskDone = () => {
   setTasksList(
     tasksList.map((task) => {
       console.log(task.id); 
       return task.id === id ? { ...task, isDone: true } : task;
     })
   );

  //  console.log("ok"); 
  //  console.log(id); 
  //  console.log(tasksList);
  };
  const handleSetTaskUndone = () => {
   setTasksList(
     tasksList.map((task) => {
       console.log(task.id); 
       return task.id === id ? { ...task, isDone: false } : task;
     })
   );

  
 };
  const [showInput, setShowInput] = useState(false)
  const handleEdit = () => {
    setShowInput(true);
  }

  return (
    <div
      style={
        isDone
          ? { border: "1px solid #08F62C " } 
          : { border: "1px solid #0F547D" } 
      }
      id="task"
    >
      <div>
        {showInput ? (
          <UpdateTaskForm
            setTasksList={setTasksList}
            tasksList={tasksList}
            id={id}
            title={title}
            setShowInput={setShowInput}
          />
        ) : (
          <h3
            style={
              isDone
                ? { color: "#08F62C " } 
                : { color: "#b63443" }
            }
          >
            {title}
          </h3>
        )}
        {/* <p>{description}</p> */}
      </div>
      <div id="icons">
        {isDone ? (
          <img
            id="pen"
            onClick={handleEdit}
            src="/images/pen-tool (2).png"
            alt=""
          />
        ) : (
          <img
            id="pen"
            onClick={handleEdit}
            src="/images/pen-tool.png"
            alt=""
          />
        )}
        {/* <img id="pen" onClick={handleEdit} src="/images/pen-tool.png" alt="" /> */}
        {isDone ? (
          <img
            id="cancel"
            onClick={handleSetTaskUndone}
            src="/images/cancel (3).png"
            alt=""
          />
        ) : (
          <img
            id="tick"
            onClick={handleSetTaskDone}
            src="/images/check-mark.png"
            alt=""
          />
        )}

        {isDone ? (
          <img
            id="delete1"
            onClick={handleDelete}
            src="/images/delete (2).png"
            alt=""
          />
        ) : (
          <img
            id="delete"
            onClick={handleDelete}
            src="/images/delete.png"
            alt=""
          />
        )}
        {/* <img id="delete" src="/images/delete.png" alt="" />
        <img src="/images/delete (2).png" alt="" /> */}
      </div>
    </div>
  );
}

export default TaskItem;
