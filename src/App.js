import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, Container, CircularProgress } from '@mui/material';
import Header from './components/Header';

const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <CssBaseline />
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      <Container maxWidth="lg">
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
            <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
            <Route path="/" element={!loggedIn ? <Navigate to="/login" /> : <Home user={user} />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
