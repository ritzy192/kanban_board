import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function UpsertTask(props) {
  let { id, title } = props.task;
  const [show, setShow] = useState(true);
  const [taskTitle, setTaskTitle] = useState(title);
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    props.closeModal();
  };
  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedTask = { id, title: taskTitle, storyPnt: 0 };
    setTaskTitle("");
    console.log("", updatedTask);
    setShow(false);
    props.closeModal();
    props.updateTask(updatedTask);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={taskTitle}
                onChange={handleTaskTitleChange}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpsertTask;
