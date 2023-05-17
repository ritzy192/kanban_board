import Task from "../Tasks/Task";

const StatusTypeCard = (props) => {
  const tasks = props.taskList;
  const taskEvent = props.handleTaskEvent
  //console.log("here it is ", tasks);
  //console.log("Card Name is ", props.taskTypeList.title);
  return (
    <div className="taskTypeCards">
      <h4>{props.taskTypeList.title}</h4>
      {tasks.map((item) => (
        <Task key= {item.id} task={item} callTaskEvent={taskEvent}></Task>
      ))}
    </div>
  );
};

export default StatusTypeCard;
