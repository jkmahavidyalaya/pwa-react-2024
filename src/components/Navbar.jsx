import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn, onLogout }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {loggedIn ? (
          <li><button onClick={onLogout}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
