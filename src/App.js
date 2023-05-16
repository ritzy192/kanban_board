import "./App.css";
import TaskCard from "../src/Components/TaskCard/TaskCard";
import "./Components/TaskCard/TaskCard.css";
import { useState } from "react";
import NewTask from "./Components/NewTask/NewTask";

function App() {
  const taskTypeList = [
    {
      title: "Backlog",
      status: 0,
    },
    {
      title: "In Progress",
      status: 1,
    },
    {
      title: "In Testing",
      status: 2,
    },
    {
      title: "Done",
      status: 3,
    },
  ];

  const taskList = [
    {
      title: "Create demo",
      status: 0,
      storyPoint: 4,
    },
    {
      title: "Get Details from team A",
      status: 1,
      storyPoint: 2,
    },
    {
      title: "Add Payment Gateway",
      status: 0,
      storyPoint: 5,
    },
    {
      title: "Create Task improvement",
      status: 2,
      storyPoint: 1,
    },
    {
      title: "task 2 to be done",
      status: 3,
      storyPoint: 1,
    },
  ];

  const tasksWithTypelist = taskTypeList.reduce((acc, curr) => {
    const filteredTasks = taskList.filter((task) => {
      return task.status === curr.status;
    });
    return [
      ...acc,
      {
        ...curr,
        tasks: filteredTasks,
      },
    ];
  }, []);

  const [finalList, setFinallist] = useState(tasksWithTypelist);

  const newTaskHandler = (task) => {
    const newTask = { title: task.title, status: 0, storyPoint: 0 };
    const updatedTaskList = [...finalList];
    const typeIndex = updatedTaskList.findIndex((item) => {
      return item.status === 0;
    });
    const updatedTasks = [...updatedTaskList[typeIndex].tasks, newTask];
    updatedTaskList[typeIndex] = {
      ...updatedTaskList[typeIndex],
      tasks: updatedTasks,
    };

    console.log("******* ", updatedTaskList);
    setFinallist(updatedTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <NewTask createTask={newTaskHandler}></NewTask>
      <div className="cardDiv">
        {finalList.map((item) => (
          <TaskCard className="taskTypeCards" taskList={item}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default App;
