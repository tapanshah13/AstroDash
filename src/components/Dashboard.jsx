// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import './Dashboard.css';

const Dashboard = ({ weatherData }) => {
  const [searchDate, setSearchDate] = useState('');
  const [moonPhase, setMoonPhase] = useState(1);
  const [filteredData, setFilteredData] = useState(weatherData.days);

  useEffect(() => {
    setFilteredData(weatherData.days);
  }, [weatherData]);

  const handleSearch = () => {
    const filtered = weatherData.days.filter(day => {
      return (!searchDate || day.datetime.includes(searchDate)) && day.moonphase <= moonPhase;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="dashboard">
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter Date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={moonPhase}
          onChange={(e) => setMoonPhase(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="chart-section">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="moonphase" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="temp" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Time</th>
            <th>Phase</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((day, index) => (
            <tr key={index}>
              <td>{day.datetime}</td>
              <td>{day.temp} °F</td>
              <td>{day.moonrise}</td>
              <td>{day.moonphase}</td>
              <td>
                <Link to={`/details/${day.datetime}`}>🔍</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
