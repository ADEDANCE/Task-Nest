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
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const SideNav = () => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
          const linkPath = text.toLowerCase().replace(' ', '-');
          
          // Add active class if the link matches the current location
          const isActive = location.pathname.includes(linkPath); 

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton 
                component={Link} 
                to={linkPath}  // Relative path without '/'
                sx={{
                  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'transparent', // Optional: Add active styling
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer for Mobile and Desktop */}
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
        {/* Define Nested Routes */}
        <Routes>
          {/* Use relative paths */}
          <Route path="/" element={<Typography>Welcome to the homepage!</Typography>} />
          <Route path="/SideNav/inbox" element={<Typography>Inbox Content</Typography>} />
          <Route path="/SideNav/starred" element={<Typography>Starred Content</Typography>} />
          <Route path="/SideNav/send-email" element={<Typography>Send Email Content</Typography>} />
          <Route path="/SideNav/drafts" element={<Typography>Drafts Content</Typography>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default SideNav;
