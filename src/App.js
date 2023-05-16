import "./App.css";
import StatusTypeCard from "../src/Components/StatusTypeCard/StatusTypeCard";
import "./Components/StatusTypeCard/StatusTypeCard.css";
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

  const dummyTaskList = [
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

  // const tasksWithTypelist = taskTypeList.reduce((acc, curr) => {
  //   const filteredTasks = taskList.filter((task) => {
  //     return task.status === curr.status;
  //   });
  //   return [
  //     ...acc,
  //     {
  //       ...curr,
  //       tasks: filteredTasks,
  //     },
  //   ];
  // }, []);

  const [finalTaskList, setFinalTaskList] = useState(dummyTaskList);

  // const newTaskHandler = (task) => {
  //   const newTask = { title: task.title, status: 0, storyPoint: 0 };
  //   const updatedTaskList = [...finalTaskList];
  //   const typeIndex = updatedTaskList.findIndex((item) => {
  //     return item.status === 0;
  //   });
  //   const updatedTasks = [...updatedTaskList[typeIndex].tasks, newTask];
  //   updatedTaskList[typeIndex] = {
  //     ...updatedTaskList[typeIndex],
  //     tasks: updatedTasks,
  //   };

  //   console.log("******* ", updatedTaskList);
  //   setFinallist(updatedTaskList);
  // };

  const newTaskHandler = (task) => {
    console.log("New Task = ", task);
    const updatedTaskList = [...finalTaskList];
    updatedTaskList.push({ title: task.title, status: 0, storyPoint: task.storyPnt });
    //console.log("Updated list ", updatedTaskList);
    setFinalTaskList(updatedTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <NewTask createTask={newTaskHandler}></NewTask>
      <div className="cardDiv">
        {taskTypeList.map((item) => (
          <StatusTypeCard
            className="taskTypeCards"
            taskTypeList={item}
            taskList={finalTaskList.filter((task) => {
              return task.status === item.status;
            })}
          ></StatusTypeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
