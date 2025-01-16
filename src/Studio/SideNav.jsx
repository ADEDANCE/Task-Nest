import React, { useState, useEffect } from 'react';
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
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import AddTask from './AddTask';
import { Button } from "react-bootstrap";

const SideNav = () => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setMobileOpen(false); // Close the drawer when the route changes
  }, [location]);

  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({ title: "", description: "" });

  
  const handleShow = () => {
    setShowModal(true);
    if (isMobile) {
      setMobileOpen(false); // Close the drawer on mobile
    }
  };
  const handleClose = () => setShowModal(false);
  const handleAddTask = () => {
    console.log("Task added:", task);
    setTask({ title: "", description: "" });
    handleClose();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <div className="text-center">
          <Button variant="primary" onClick={handleShow}>Add New Task</Button>
        </div>
        {['Home-page', 'Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={`/sidenav/${text.toLowerCase().replace(' ', '-')}`}
              onClick={handleDrawerToggle }
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Material-UI theme and media query hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobile && ( // Show the menu icon only on mobile
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">Clipped drawer</Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Typography>Inbox Content</Typography>} />
          <Route path="/inbox" element={<Typography>Inbox Content</Typography>} />
          <Route path="/starred" element={<Typography>Starred Content</Typography>} />
          <Route path="/send-email" element={<Typography>Send Email Content</Typography>} />
          <Route path="/drafts" element={<Typography>Drafts Content</Typography>} />
        </Routes>
        <Outlet />
      </Box>
      <AddTask show={showModal} handleClose={handleClose} handleAddTask={handleAddTask} task={task} setTask={setTask} />
    </Box>
  );
};

export default SideNav;
