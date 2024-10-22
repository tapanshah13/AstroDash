// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ weatherData }) => {
  // Initial states for search date and slider value (full slider by default)
  const [searchDate, setSearchDate] = useState('');
  const [moonPhase, setMoonPhase] = useState(1); // Slider default value is 1 (fully active)
  const [filteredData, setFilteredData] = useState(weatherData.days);

  // Effect to show all data on initial load
  useEffect(() => {
    setFilteredData(weatherData.days);
  }, [weatherData]);

  const handleSearch = () => {
    // Inverse logic: filter moonphase where moonphase is <= slider value
    const filtered = weatherData.days.filter((day) => {
      return (
        (!searchDate || day.datetime.includes(searchDate)) &&
        (day.moonphase <= moonPhase) // Inverse logic for moon phase
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2>New York, New York, USA</h2>
        <div className="time-info">
          <p>Current Time: 14:25:39</p>
          <p>Moon Rise: {weatherData.days[0].moonrise}</p>
          <p>Moon Phase: {weatherData.days[0].moonphase}</p>
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter Date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <div className="slider-container">
          <label>Moon Phase:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={moonPhase}
            onChange={(e) => setMoonPhase(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Time</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((day, index) => (
            <tr key={index}>
              <td>{day.datetime}</td>
              <td>{day.temp} °F</td>
              <td>{day.moonrise}</td>
              <td>{day.moonphase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
