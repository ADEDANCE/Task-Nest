import React, { useState, useEffect } from 'react';
import { IoIosSave } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

const EditTask = ({  task, onSave, onCancel }) => {
  const [updatedText, setUpdatedText] = useState('');

  useEffect(() => {
    if (task) {
      setUpdatedText(task.text);
    }
  }, [task]); // Ensure updatedText is updated when task changes

  const handleSave = () => {
    if (updatedText.trim() !== '') {
      onSave(task.id, updatedText);
    }
  };

  return (
    <>
            <input
              type="text"
               placeholder='Updating'
            />
             <button className="AddTasks">....</button>
        <ul >
                    <li key={task.id} className='EditItems'>
                    <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        className="text"
        style={{
          textAlign:"center"
        }}
      />
                      <div className="Taskbuttons">
                        <IoIosSave
                          className="Editb"
                          onClick={handleSave}
                        />
                        <CiCircleRemove
                          className="DeleteB"
                          onClick={onCancel}
                        />
                      </div>
                    </li>
                </ul>
    </>

  );
};

export default EditTask;
