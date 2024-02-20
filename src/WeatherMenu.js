import React, { useState, useEffect } from 'react';

function WeatherMenu() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Fetch weather data from API
    const locations = ['Zurich', 'Izmir'];
    locations.forEach(location => {
      fetch(`http://api.weatherstack.com/current?access_key=77b2439075ee0808f765612aba6bd96f&query=${location}`)
        .then(response => response.json())
        .then(data => {
          console.log(data); // log the data
          if (data.current) {
            setWeatherData(prevData => ({
              ...prevData,
              [location]: data.current.temperature // adjust this according to the data you want to display
            }));
          }
        });
    });
  }, []);

  return (
    <div>
      {/* Display weather data */}
      <p>Zurich: {weatherData.Zurich}</p>
      <p>Izmir: {weatherData.Izmir}</p>
    </div>
  );
}

export default WeatherMenu;