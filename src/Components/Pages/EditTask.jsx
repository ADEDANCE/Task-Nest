import React, {useState} from 'react'



const EditTask = ({ task, onSave, onCancel }) => {
    const [updatedText, setUpdatedText] = useState(task.text);
  
    const handleSave = () => {
      if (updatedText.trim() !== '') {
        onSave(task.id, updatedText); // Save changes
      }
    };
      return (
        <div className="edit-task">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      );
}

export default EditTask