import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../NewTask/NewTask.css'

const NewTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [storyPoint, setStoryPoint] = useState(0);

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title: taskTitle, storyPnt: 0 };
    setTaskTitle('')
    props.createTask(newTask);
  };
  return (
    <Form onSubmit={handleSubmit} className="newForm">
      {/* <label htmlFor="taskTitle"></label>
      <input type="text" id="taskTitle" name="taskTitle" />
      <label htmlFor="Description">Description:</label>
        <input
          type="text"
          id="description"
          name="Description"
          value={Description}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="StoryPoint">StoryPoint:</label>
        <input
          type="text"
          id="StoryPoint"
          name="StoryPoint"
          value={StoryPoint}
          onChange={handleStoryPointChange}
        /> */}

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

      {/* <Button onClick={handleSubmit}>Add Task</Button> */}
    </Form>
  );
};

export default NewTask;
