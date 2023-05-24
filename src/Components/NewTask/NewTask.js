import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NewTask/NewTask.css";

const NewTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [storyPoint, setStoryPoint] = useState(0);

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.length === 0) return;
    const newTask = { title: taskTitle, storyPnt: 0 };
    setTaskTitle("");
    props.createTask(newTask);
  };
  return (
    <Form onSubmit={handleSubmit} className="newForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Type Title</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Enter Title"
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add Task
      </Button>
    </Form>
    // <>
    // <label htmlFor="taskTitle"></label>
    //   <label htmlFor="Title">title:</label>
    //     <input
    //       type="text"
    //       id="title"
    //       name="Title"
    //       value={taskTitle}
    //       onChange={handleTaskTitleChange}
    //     />
    //     <Button onClick={handleSubmit}>Add Task</Button>
    // </>
  );
};

export default NewTask;
