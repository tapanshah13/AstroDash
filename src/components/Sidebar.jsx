// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>AstroDash</h1>
      <ul>
        <li>🏠 Dashboard</li>
        <li>🔍 Search</li>
        <li>ℹ️ About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
