import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import DropdownSearch from "./DropdownSearch";

const AddTask = ({ show, handleClose, handleAddTask, task, setTask,  }) => {
  const options = ["My project", "Home", "My work", "Education"];

  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="Taskbutton">
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="taskTitle">
              <Form.Control
                type="text"
                placeholder="Task Title"
                autoFocus
                value={task.title || ""}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Control
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
              <Col>
                <DropdownSearch options={options} />
              </Col>
              <Col className="text-end">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAddTask} className="ms-2">
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
