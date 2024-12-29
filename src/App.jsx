import { useState } from 'react'
import './App.css'
import AddTask from './componenets/addTask/AddTask'
import Profile from './componenets/profile/Profile'
import TasksList from './componenets/taskslist/TasksList'
import { tasks } from './tasks'

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [category, setCategory] = useState("");

  // console.log(tasksList)
  // console.log(category);

  return (
    <div id="app">
      <Profile category={category} />
      <div id="tasks">
        <AddTask
          setTasksList={setTasksList}
          tasksList={tasksList}
          setCategory={setCategory}
          category={category}
        />
        <TasksList setTasksList={setTasksList} tasksList={tasksList} />
      </div>
    </div>
  );
}

export default App
