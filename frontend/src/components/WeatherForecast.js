import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

export const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  const fetchWeatherData = async () => {
    try {
      const apiKey = '0770df201288b97149d3b4937417f34c';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      const data = await response.json();

      const weatherData = data.list;
      const today = new Date();
      today.setHours(9, 0, 0, 0);

      const result = [];
      for (let i = 1; i < 5; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const formattedDate = formatDate(currentDate);
        const dailyForecasts = weatherData.filter((item) => item.dt_txt.includes(formattedDate));

        if (dailyForecasts.length > 0) {
          const minTemp = Math.min(...dailyForecasts.map((forecast) => forecast.main.temp));
          const maxTemp = Math.max(...dailyForecasts.map((forecast) => forecast.main.temp));
          const weekday = getDayOfWeek(formattedDate);
          const icon = dailyForecasts[0].weather[0].icon;
          const description = dailyForecasts[0].weather[0].description;

          result.push({
            date: formattedDate,
            minTemp,
            maxTemp,
            weekday,
            icon,
            description,
          });
        }
      }

      setForecastData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherData0 = async () => {
    try {
      const apiKey = '0770df201288b97149d3b4937417f34c';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    fetchWeatherData0();
  };

  return (

    <div className="zzz">
      <div className="weather-forecast-container">
      <h2 className="heading">Weather Forecast</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button className="button" type="submit">
          Get Forecast
        </button>
      </form>
      {weatherData && (
        <div className="weather-data">
          <div className='todayWat'>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure}mb</p>
          <p>Description: {weatherData.weather[0].description}</p>
          </div>
          <div className='todayIcon'>
          <img className="icon" src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          </div>
        </div>
      )}
      <hr />
      <div className="forecast-container">
        {forecastData.map((forecast) => (
          <div key={forecast.date} className="forecast-item">
            <p className="date">Date: {forecast.date}</p>
            <p className="weekday">Day: {forecast.weekday}</p>
            <div className="temperature-container">
              <p className="temperature">Min Temp: {Math.round(forecast.minTemp - 273.15)}°C.</p>
              <p className="temperature">Max Temp: {Math.round(forecast.maxTemp - 273.15)}°C.</p>
            </div>
            <p className="description">Description: {forecast.description}</p>
            <div className="icon-container">
              <img className="icon" src={`https://openweathermap.org/img/w/${forecast.icon}.png`} alt="Weather Icon" />
            </div>
            {/* <p className="weekday">Day: {forecast.weekday}</p> */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

// export default WeatherForecast;
