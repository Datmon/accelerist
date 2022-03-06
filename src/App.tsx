import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './components/MainLayout/MainLayout';
import Profile from './pages/Profile';
import { selectors } from './store';
import Dashboard from './pages/Dashboard';

function App() {
  const accessToken = useSelector(selectors.auth.selectAccessToken);

  const setBearer = () => {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      axios.defaults.headers.common.Authorization = false;
      /* if setting null does not remove `Authorization` header then try
          delete axios.defaults.headers.common['Authorization'];
        */
    }
  };

  useEffect(() => {
    setBearer();
  }, [accessToken]);

  return (
    <Router>
      <Routes>
        {accessToken ? (
          <Route path="/" element={<MainLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
