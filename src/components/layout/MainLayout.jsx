import { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Topbar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
          toggleColorMode={toggleColorMode}
          mode={mode}
        />
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            mt: 8
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;