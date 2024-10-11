import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
    } 
    // else {
    //   navigate('/login');
    // }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
