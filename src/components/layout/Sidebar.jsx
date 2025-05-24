import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  LocalHospital as ClinicIcon,
  MonetizationOn as SubscriptionIcon,
  Assessment as AnalyticsIcon,
  MonitorHeart as HealthIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Clinics', icon: <ClinicIcon />, path: '/clinics' },
  { text: 'Users', icon: <PeopleIcon />, path: '/users' },
  { text: 'Subscriptions', icon: <SubscriptionIcon />, path: '/subscribe' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  { text: 'System Health', icon: <HealthIcon />, path: '/system-health' },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          ...(!isSidebarOpen && {
            width: theme => theme.spacing(7),
            overflowX: 'hidden',
          }),
          transition: theme =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        {isSidebarOpen && (
          <Typography variant="h6" noWrap component="div">
            Leada Admin
          </Typography>
        )}
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                justifyContent: isSidebarOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSidebarOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {isSidebarOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;