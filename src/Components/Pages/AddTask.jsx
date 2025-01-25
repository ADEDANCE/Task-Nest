import React, { useState, useEffect } from 'react';


const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks'); // Key is 'tasks'
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks)); 
      } catch (error) {
        console.error("Error parsing saved tasks:", error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever `tasks` changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to localStorage
    }
  }, [tasks]);
  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue(''); // Clear input field
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };



  return (
    <div className='To-do'>
      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask} className='AddTasks' >Add</button>
      </div>
      <div className="taskarea">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className='text' >{task}</span>
              <button className=''>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;






// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
// import DropdownSearch from "./DropdownSearch";

// const AddTask = ({ show, handleClose, handleAddTask, task, setTask,  }) => {
//   const options = ["My project", "Home", "My work", "Education"];

//   return (
//     <>
//       <Modal show={show} onHide={handleClose} centered className="Taskbutton">
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-4" controlId="taskTitle">
//               <Form.Control
//                 type="text"
//                 placeholder="Task Title"
//                 autoFocus
//                 value={task.title || ""}
//                 onChange={(e) => setTask({ ...task, title: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="taskDescription">
//               <Form.Control
//                 placeholder="Task Description"
//                 as="textarea"
//                 rows={2}
//                 value={task.description || ""}
//                 onChange={(e) =>
//                   setTask({ ...task, description: e.target.value })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Container fluid="md">
//             <Row>
//               <Col>
//                 <DropdownSearch options={options} />
//               </Col>
//               <Col className="text-end">
//                 <Button variant="secondary" onClick={handleClose}>
//                   Close
//                 </Button>
//                 <Button variant="primary" onClick={handleAddTask} className="ms-2">
//                   Save Changes
//                 </Button>
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default AddTask;
