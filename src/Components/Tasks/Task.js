import "../Tasks/Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import UpsertTask from "../UpsertTask/UpsertTask";
import { useState } from "react";

const Task = (props) => {
  const [showEditTask, setShowEditTask] = useState(false);
  const task = props.task;
  const status = props.task.status;
  let isDemoteDisabled = false;
  let isPromoteDisabled = false;

  if (status === 0) {
    isDemoteDisabled = true;
  } else if (status === 3) {
    isPromoteDisabled = true;
  }
  const handleDelete = (task) => {
    const taskObject = { task, operation: "delete" };
    props.callTaskEvent(taskObject);
  };
  const handlePromote = (task) => {
    const taskObject = { task, operation: "promote" };
    props.callTaskEvent(taskObject);
  };
  const handleDemote = (task) => {
    const taskObject = { task, operation: "demote" };
    props.callTaskEvent(taskObject);
  };
  const handleEditTask = () => {
    setShowEditTask(true);
  };
  const getUpdatedTask = (updatedTask) => {
    const taskObject = { task: updatedTask, operation: "edit" };
    props.callTaskEvent(taskObject);
  };

  return (
    <>
      {showEditTask ? (
        <UpsertTask
          task={task}
          closeModal={() => setShowEditTask(false)}
          updateTask={getUpdatedTask}
        ></UpsertTask>
      ) : null}
      <div className="taskDetails">
        <div>
          <h5>{task.title}</h5>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            shake
            className={isDemoteDisabled ? "disabled-icon" : ""}
            onClick={() => {
              handleDemote(task);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            
            onClick={() => handleDelete(task)}
          />
          <FontAwesomeIcon
            icon={faPencil}
            
            onClick={() => handleEditTask(task)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            shake
            className={isPromoteDisabled ? "disabled-icon" : ""}
            onClick={() => handlePromote(task)}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
