import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from 'react-bootstrap'


const AddTask = ({ show, handleClose, handleAddTask, task, setTask }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="Taskbutton">
        {/* <Modal.Header >
          <Modal.Title >Add a New Task</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Form>
            <Form.Group className="Task-Title mb-4" controlId="text">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                 className="Task-Title"
                type="text"
                placeholder="Task Title"
                autoFocus
                
                value={task.text || ""}
                onChange={(e) => setTask({ ...task, text: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="Task-Title mb-3" controlId="formTaskDescription">
              {/* <Form.Label>Task Description</Form.Label> */}
              <Form.Control
              className="Task-Title"
              placeholder="Task Description"
                as="textarea"
                rows={2}
                value={task.description || ""}
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Container fluid="md">
        <Row>
        <Col><button> how</button></Col>
        <Col>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Save Changes
          </Button>
        </Col>
      </Row>
           
        
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTask;
