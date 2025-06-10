import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#003366', color: 'white' }}>
      <h2 style={{ margin: 0 }}>FairBuy</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', marginTop: '0.5rem' }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/buyer" style={{ color: 'white' }}>Buyer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
