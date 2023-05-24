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
      id: 1,
      title: "Create demo",
      status: 2,
      storyPoint: 4,
    },
    {
      id: 2,
      title: "Get Details from team A",
      status: 1,
      storyPoint: 2,
    },
    {
      id: 3,
      title: "Add Payment Gateway",
      status: 0,
      storyPoint: 5,
    },
    {
      id: 4,
      title: "Create Task improvement",
      status: 2,
      storyPoint: 1,
    },
    {
      id: 5,
      title: "task 2 to be done",
      status: 3,
      storyPoint: 1,
    },
  ];

  const [finalTaskList, setFinalTaskList] = useState(dummyTaskList);
  const [newId, setNewId] = useState(dummyTaskList.length + 1);

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
    const updatedTaskList = [...finalTaskList];
    updatedTaskList.push({
      id: newId,
      title: task.title,
      status: 0,
      storyPoint: task.storyPnt,
    });
    setNewId(newId + 1);
    //console.log("Updated list ", updatedTaskList);
    setFinalTaskList(updatedTaskList);
  };

  const taskEventHandler = (taskObject) => {
    const { task, operation } = taskObject;
    switch (operation) {
      case "promote":
        promoteTask(task.id);
        break;
      case "demote":
        demoteTask(task.id);
        break;
      case "edit":
        editTask(task);
        break;
      default:
        deleteTask(task.id);
        break;
    }
  };

  const deleteTask = (id) => {
    let updatedList = [...finalTaskList];
    updatedList = updatedList.filter((task) => task.id !== id);
    setFinalTaskList(updatedList);
  };

  const promoteTask = (id) => {
    let updatedList = [...finalTaskList];
    const updatedArray = updatedList.map((task) => {
      if (task.id === id && task.status < taskTypeList.length - 1)
        return { ...task, status: task.status + 1 };
      return task;
    });
    setFinalTaskList(updatedArray);
  };

  const demoteTask = (id) => {
    let updatedList = [...finalTaskList];
    const updatedArray = updatedList.map((task) => {
      if (task.id === id && task.status > 0)
        return { ...task, status: task.status - 1 };
      return task;
    });
    setFinalTaskList(updatedArray);
  };

  const editTask =(updatedTask) => {
    let updatedList = [...finalTaskList];
    const updatedArray = updatedList.map((task) => {
      if (task.id === updatedTask.id)
        return { ...task, title: updatedTask.title };
      return task;
    });
    setFinalTaskList(updatedArray);
  }

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
            key={item.status}
            taskTypeList={item}
            handleTaskEvent={taskEventHandler}
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
