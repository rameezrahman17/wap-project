import React from 'react';

/**
 * Card Component
 * Receives city data as props and displays a clean UI card.
 */
const Card = ({ city, country, aqi, pm25, o3, status, delay }) => {
  
  // Logic to determine status color class based on AQI value
  const getStatusClass = (aqiValue) => {
    if (aqiValue <= 50) return 'status-good';
    if (aqiValue <= 100) return 'status-moderate';
    return 'status-unhealthy';
  };

  return (
    <div className="city-card" style={{ animationDelay: `${delay}s` }}>
      <div className="card-header">
        <h2 className="city-name">{city}</h2>
        <span className="country-tag">{country}</span>
      </div>

      <div className={`aqi-display ${getStatusClass(aqi)}`}>
        <span className="aqi-value">{aqi}</span>
        <span className="aqi-label">AQI INDEX</span>
      </div>

      <div className="data-points">
        <div className="data-item">
          <span className="data-label">PM2.5</span>
          <span className="data-value">{pm25} µg/m³</span>
        </div>
        <div className="data-item">
          <span className="data-label">OZONE (O3)</span>
          <span className="data-value">{o3} ppb</span>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', color: '#888' }}>
        Current status: <strong>{status}</strong>
      </div>
    </div>
  );
};

export default Card;
