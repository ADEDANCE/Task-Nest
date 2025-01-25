import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownSearch = ({ options }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    setSearchQuery(''); 
    setIsOpen(false);    
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='dropdown' style={{ position: 'relative', width: '200px' }}>
      <div 
        className="dropdown-selected" 
        onClick={() => setIsOpen(!isOpen)} 
        style={{
          padding: '8px', 
          border: '1px solid #ccc', 
          cursor: 'pointer', 
          backgroundColor: '#fff'
        }}
      >
        {selectedItem || 'Select Project'}
      </div>

      {isOpen && (
        <div
          className="dropdown-list"
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            zIndex: 1,
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '5px', border: 'none', marginBottom: '10px' }}
          />
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            {filteredOptions.length === 0 ? (
              <li style={{ padding: '8px' }}>No projects found</li>
            ) : (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectedItem(option)}
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    backgroundColor: selectedItem === option ? '#d3d3d3' : 'transparent',
                  }}
                >
                  <Link 
                    to={`/sidenav/${option.toLowerCase().replace(' ', '-')}`} 
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {option}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
