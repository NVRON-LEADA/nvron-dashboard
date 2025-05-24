import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import ClinicPage from './pages/Clinic'
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import Subscriptionpage from './pages/Subscriptionspage';
import AnalyticsPage from './pages/Analytics';
import SystemHealthPage from './pages/SystemHealth';
import UserPage from './pages/Users';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { UserRoles } from './contexts/AuthContext';
import './index.css';
import './App.css';
import './styles/global.css';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/unauthorized'].includes(location.pathname);

  return isAuthPage ? (
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  ) : (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/clinics" element={<ProtectedRoute element={<ClinicPage/>} />} />
        <Route path="/users" element={<ProtectedRoute element={<UserPage/>} />}/>
        <Route path="subscribe" element={<ProtectedRoute element={<Subscriptionpage />} />} />
        <Route path="/analytics" element={<ProtectedRoute element={<AnalyticsPage/>} />} />
        <Route path="/system-health" element={<ProtectedRoute element={<SystemHealthPage/>} />} />
      </Routes>
    </MainLayout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
