import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header className="App-header">
        <Link to="/">
          <h2>Our Shop</h2>
        </Link>
        <ul>
          <li>About</li>
          <li>Login</li>
        </ul>
      </header>
    </div>
  );
};
