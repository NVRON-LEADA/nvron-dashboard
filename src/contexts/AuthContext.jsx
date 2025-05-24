import { createContext, useContext, useState } from 'react';

export const UserRoles = {
  SUPER_ADMIN: 'super_admin',
  CLINIC_ADMIN: 'clinic_admin',
  DOCTOR: 'doctor',
  RECEPTIONIST: 'receptionist'
};

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const hasPermission = (requiredRole) => {
    if (!user) return false;
    
    switch (user.role) {
      case UserRoles.SUPER_ADMIN:
        return true; // Super admin has access to everything
      case UserRoles.CLINIC_ADMIN:
        return requiredRole === UserRoles.CLINIC_ADMIN ||
               requiredRole === UserRoles.DOCTOR ||
               requiredRole === UserRoles.RECEPTIONIST;
      case UserRoles.DOCTOR:
        return requiredRole === UserRoles.DOCTOR;
      case UserRoles.RECEPTIONIST:
        return requiredRole === UserRoles.RECEPTIONIST;
      default:
        return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};