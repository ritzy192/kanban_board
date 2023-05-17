import "../Tasks/Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
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
    const taskObject = { id: task.id, operation: "delete" };
    props.callTaskEvent(taskObject);
  };
  const handlePromote = (task) => {
    const taskObject = { id: task.id, operation: "promote" };
    props.callTaskEvent(taskObject);
  };
  const handleDemote = (task) => {
    const taskObject = { id: task.id, operation: "demote" };
    props.callTaskEvent(taskObject);
  };

  return (
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
          shake
          onClick={() => handleDelete(task)}
        />
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          shake
          className={isPromoteDisabled ? "disabled-icon" : ""}
          onClick={() => handlePromote(task)}
        />
      </div>
    </div>
  );
};

export default Task;
