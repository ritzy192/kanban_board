import "./App.css";
import TaskCard from "../src/Components/TaskCard/TaskCard";
import "./Components/TaskCard/TaskCard.css";
import { useState } from "react";

function App() {
  const taskTypelist = [
    {
      title: "Backlog",
    },
    {
      title: "In Progress",
    },
    {
      title: "In Testing",
    },
    {
      title: "Done",
    },
  ];

  const dummyList = [
    {
      title: "Create demo",
      status: 0,
      storyPoint: 4,
    },
    {
      title: "Get Details from team A",
      status: 0,
      storyPoint: 2,
    },
    {
      title: "Add Payment Gateway",
      status: 0,
      storyPoint: 5,
    },
    {
      title: "Create Task improvement",
      status: 0,
      storyPoint: 1,
    },
  ];

  const [taskList, setTaskList] = useState(dummyList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <div className="cardDiv">
        {taskTypelist.map((item) => (
            <TaskCard className="taskTypeCards" titleName={item.title}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default App;
