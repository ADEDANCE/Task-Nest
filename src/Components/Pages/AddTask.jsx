import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import EditTask from './EditTask';

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
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
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Edit a task
  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task); // Set the current task being edited
  };

  // Save the edited task
  const handleSaveTask = (id, updatedText) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: updatedText } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false); // Exit editing mode
    setCurrentTask(null); // Clear current task
  };

  return (
    <div className="To-do">
      {!isEditing ? (
        <>
          <div className="form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTask} className="AddTasks">Add</button>
          </div>
          <div className="taskarea">
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <span className="text">{task.text}</span>
                  <div className="Taskbuttons">
                    <FaRegEdit
                      className="Editb"
                      onClick={() => handleEditTask(task)}
                    />
                    <MdDeleteForever
                      className="DeleteB"
                      onClick={() => handleDeleteTask(task.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>

<EditTask
          task={currentTask}
          onSave={handleSaveTask}
          onCancel={() => setIsEditing(false)}
        />
                    <div className="taskarea">
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <span className="text">{task.text}</span>
                  <div className="Taskbuttons">
                    <FaRegEdit
                      className="Editb"
                      onClick={() => handleEditTask(task)}
                    />
                    <MdDeleteForever
                      className="DeleteB"
                      onClick={() => handleDeleteTask(task.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      
      )}
    </div>
  );
};

export default AddTask;
