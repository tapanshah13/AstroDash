// src/components/WeatherCard.jsx
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ day }) => {
  return (
    <div className="weather-card">
      <h2>{day.datetime}</h2>
      <p>Temperature: {day.temp}°F</p>
      <p>Feels Like Minimum: {day.feelslikemin}°F</p>
      <p>Visibility: {day.visibility} miles</p>
      <p>Moonrise: {day.moonrise}</p>
      <p>Moonset: {day.moonset}</p>
      <p>Moon Phase: {day.moonphase}</p>
    </div>
  );
};

export default WeatherCard;
