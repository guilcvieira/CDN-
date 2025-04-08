import React, { createContext, useContext, useState } from 'react';
import { defaultUser } from '../types/types.ts';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    ...defaultUser,
    email: '',
    password: '',
  });

  const login = (userData) => {
    setUser(userData);
    alert(`Logged in as ${userData.email}`);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};