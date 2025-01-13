import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Divider,
  ListItemIcon,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import AddTask from './AddTask';
import { Button } from "react-bootstrap";

const SideNav = () => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({ title: "", description: "" });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleAddTask = () => {
    console.log("Task added:", task);
    setTask({ title: "", description: "" }); // Reset task fields
    handleClose();
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <div className="text-center mt-5">
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      < AddTask
        show={showModal}
        handleClose={handleClose}
        handleAddTask={handleAddTask}
        task={task}
        setTask={setTask}
      />
    </div>
        {['Home-page','Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={`/sidenav/${text.toLowerCase().replace(' ', '-')}`}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
   <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
             
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
     
        <Routes>
          <Route path=''></Route>
        <Route path="/" element={<Typography>Inbox t76Content</Typography>} />
          <Route path="/inbox" element={<Typography>Inbox Content</Typography>} />
          <Route path="/starred" element={<Typography>Starred Content</Typography>} />
          <Route path="/send-email" element={<Typography>Send Email Content</Typography>} />
          <Route path="/drafts" element={<Typography>Drafts Content</Typography>} />
        </Routes>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SideNav;
