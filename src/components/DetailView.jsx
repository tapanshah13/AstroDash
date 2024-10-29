// src/components/DetailView.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailView.css';

const DetailView = ({ weatherData }) => {
  const { date } = useParams();
  const dayData = weatherData.days.find(day => day.datetime === date);

  if (!dayData) {
    return <div>Data not found for the selected date.</div>;
  }

  return (
    <div className="detail-view">
      <h2>Details for {dayData.datetime}</h2>
      <p><strong>Phase:</strong> 🌒 {dayData.phase}</p>
      <p><strong>Temperature:</strong> {dayData.temp} °F</p>
      <p><strong>Visibility:</strong> {dayData.visibility} miles</p>
      <p><strong>Moonrise:</strong> {dayData.moonrise}</p>
      <p><strong>Moonset:</strong> {dayData.moonset}</p>
      <p><strong>Description:</strong> {dayData.description}</p>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default DetailView;
