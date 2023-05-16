import Task from "../Tasks/Task";

const TaskCard = (props) => {
  const typeWithTasks = props.taskList;
  //console.log("here it is ", typeWithTasks);
  //console.log(props.taskList)
  return (
    <div className="taskTypeCards">
      <h4>{typeWithTasks.title}</h4>
      {typeWithTasks.tasks.map((item) =>
        <Task task={item}></Task>
      )}
    </div>
  );
};

export default TaskCard;
