import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated imports
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Header />
        <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes> {/* Changed from Switch */}
            <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
            <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
            <Route path="/" element={!loggedIn ? <Navigate to="/login" /> : <Home user={user} />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
