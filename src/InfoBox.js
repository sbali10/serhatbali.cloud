import React from 'react';
import WeatherMenu from './WeatherMenu'; // adjust the path if your WeatherMenu component is in a different location
import weather from './weather.jpeg'; // adjust the path if your image is in a different location

function InfoBox() {
    return (
      <div style={{ 
        backgroundImage: `url(${weather})`,
        backgroundSize: 'cover',
        border: '1px solid black', 
        padding: '10px 20px 20px 20px', 
        borderRadius: '5px', 
        width: '200px', 
        height: '200px', 
        marginRight: '50px'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <h2>Weather</h2>
        </div>
        <WeatherMenu />
      </div>
    );
  }

export default InfoBox;