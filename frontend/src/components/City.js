import React from "react";

export  function City() {
  return (
    <>
      <div className="weather-app">
        <div className="center-container">
          <h1>Enter City Name:</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <button type="submit">Get Weather</button>
          </form>
          {weatherData && (
            <div className="weather-data">
              <h2>{weatherData.name}</h2>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Pressure: {weatherData.main.pressure}mb</p>
              {/* <div className="chart-container">{renderChart()}</div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
