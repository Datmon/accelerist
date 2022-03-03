import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './components/MainLayout/MainLayout';
import Profile from './pages/Profile';
import { selectors } from './store';
import Dashboard from './pages/Dashboard';

function App() {
  const accessToken = useSelector(selectors.auth.selectAccessToken);

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
