import React, { useEffect, useState } from 'react';  // Import useState if you plan to use it
import { FaTh, FaBars,FaSearchPlus,FaAddressBook   } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdWorkHistory } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
 
const menuItem = [
  {
    path: "/AddTask",
    name: "Add Task",
    icon: <FaSearchPlus  />
  },
  {
    path: "/MyProject",
    name: "MyProjects",
    icon: <FaTh />
  },
  {
    path: "/Home",
    name: "Home",
    icon: <FaTh />
  },
  {
    path: "/Education",
    name: "Education",
    icon: <FaAddressBook />
  },
  {
    path: "/MyWork ",
    name: "My work",
    icon: <MdWorkHistory  />
  }
];

const SideNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [tasks, setTasks] = useState([]);
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('tasks');
    if (storedTodos) {
      setTasks(JSON.parse(storedTodos));
    }
  }, []);

    const handleAddTask = (e) => {
      e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
      localStorage.setItem('tasks', JSON.stringify([...tasks, inputValue]));
      togglePopup();
  }
    };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  };

  return (
    <div className='container-fluid'>
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars" >
            <FaBars onClick={toggleNav}/>
          </div>
        </div>
          <div>
               <button  onClick={togglePopup}>
               <FaSearchPlus  />
                Add Task
                </button>
        
          </div>
        {
          menuItem.map((item) => (
            <NavLink
              to={item.path}
              key={item.path} 
              className={({ isActive }) => {
              
                return isActive ? "active" : "";
              }}
            >
              <div className="link">
                <div className="icon">{item.icon}</div> 
                <div className="link_text">{item.name}</div>
              </div>
            </NavLink>
          ))
        }
      </div>
      <main className='main' >{children}</main>
      {
                  isPopupOpen && (
                    <div className="popup-overlay">                  
                      <div className="popup">
                      <form onSubmit={handleAddTask}> 
                        <h3>Add Task</h3>
                      <input type="text" placeholder='Add Title' onChange={handleInputChange}/>
                      <textarea name="" id="" 
                         placeholder='Description'
                         onChange={handleInputChange}
                      ></textarea>
                      <Row>
                      <Col>
                        <select>
                        <option value="">Save To</option>
                                {menuItem.map((item, index) => (
                                  <option key={index} value={item.name}>
                                    {item.name}
                                  </option>
                                )
                                )};
                        </select>
                      </Col>
                      <Col>
                            <button onClick={togglePopup} >Clear</button>
                            <button type="submit">Add Task</button>
                      </Col>
                      </Row>
                    
                      </form>
                           </div>
                        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task}</h3>
            <p>{task}</p>
          </li>
        ))}
      </ul>
                  
                    </div>
                  )
                }  
    </div>
  );
};

export default SideNav;










// import React, { useState, useEffect } from 'react';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemButton,
//   CssBaseline,
//   Toolbar,
//   AppBar,
//   Typography,
//   IconButton,
//   Divider,
//   Box,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
// import AddTask from './AddTask';
// import { Button } from "react-bootstrap";

// const SideNav = () => {
//   const drawerWidth = 240;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   useEffect(() => {
//     setMobileOpen(false); // Close the drawer when the route changes
//   }, [location]);

//   const [showModal, setShowModal] = useState(false);
//   const [task, setTask] = useState({ title: "", description: "" });

  
//   const handleShow = () => {
//     setShowModal(true);
//     if (isMobile) {
//       setMobileOpen(false); // Close the drawer on mobile
//     }
//   };
//   const handleClose = () => setShowModal(false);
//   const handleAddTask = () => {
//     console.log("Task added:", task);
//     setTask({ title: "", description: "" });
//     handleClose();
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         <div className="text-center">
//           <Button variant="primary" onClick={handleShow}>Add New Task</Button>
//         </div>
//         { ['My project','Home', 'My work', 'Education'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton
//               component={Link}
//               to={`/sidenav/${text.toLowerCase().replace(' ', '-')}`}
//               onClick={handleDrawerToggle }
//             >
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   // Material-UI theme and media query hooks
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           {isMobile && ( // Show the menu icon only on mobile
//             <IconButton
//               color="inherit"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ marginRight: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" noWrap component="div">Clipped drawer</Typography>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
//         <Toolbar />
//         <Routes>
//           <Route path="/" element={<Typography>Inbox Content</Typography>} />
//           <Route path="/My-project" element={<Typography>Inbox Content</Typography>} />
//           <Route path="/Home" element={<Typography>Starred Content</Typography>} />
//           <Route path="/Mywork" element={<Typography>Send Email Content</Typography>} />
//           <Route path="/Education" element={<Typography>Drafts Content</Typography>} />
//         </Routes>
//         <Outlet />
//       </Box>
//       <AddTask show={showModal} handleClose={handleClose} handleAddTask={handleAddTask} task={task} setTask={setTask} />
//     </Box>
//   );
// };

// export default SideNav;
