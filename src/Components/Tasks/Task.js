import "../Tasks/Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";


const Task = (props) => {
  //console.log("here at tasks");
  const task = props.task;
  return (
    <div className="taskDetails">
      <div>
        <h5>{task.title}</h5>
      </div>
      <div>
        <FontAwesomeIcon icon={faCircleArrowLeft} beatFade />
        <FontAwesomeIcon icon={faCircleArrowRight} beatFade />
        <FontAwesomeIcon icon={faTrash} shake />
      </div>
    </div>
  );
};

export default Task;
