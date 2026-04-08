import React, { useState } from 'react';
import Card from './Card'; // Importing the new Card component
import './index.css';

/**
 * Main Application Component
 * Demonstrates the use of map(), filter(), and Props.
 */

function App() {
  // Static dataset - No useEffect needed as we are using local data
  const [cities] = useState([
    { id: 1, name: "London", country: "UK", aqi: 42, pm25: "10.2", o3: "35.1", status: "Good" },
    { id: 2, name: "New York", country: "USA", aqi: 58, pm25: "15.5", o3: "42.8", status: "Moderate" },
    { id: 3, name: "Beijing", country: "China", aqi: 156, pm25: "65.4", o3: "12.2", status: "Unhealthy" },
    { id: 4, name: "Paris", country: "France", aqi: 35, pm25: "8.1", o3: "29.9", status: "Good" },
    { id: 5, name: "Mumbai", country: "India", aqi: 142, pm25: "52.3", o3: "18.5", status: "Moderate" },
    { id: 6, name: "Tokyo", country: "Japan", aqi: 28, pm25: "6.2", o3: "31.4", status: "Good" },
    { id: 7, name: "Seoul", country: "South Korea", aqi: 92, pm25: "22.5", o3: "25.1", status: "Moderate" },
    { id: 8, name: "Berlin", country: "Germany", aqi: 31, pm25: "7.4", o3: "32.0", status: "Good" },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // HOF: filter() - Filtering the data based on user input
  const searchedCities = cities.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>FreshAir City</h1>
        <p>Real-time Global Air Quality Monitoring</p>
      </header>

      <section className="controls">
        <input 
          type="text" 
          placeholder="Search for a city..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <main className="city-grid">
        {/* HOF: map() - Rendering the cards by mapping through the filtered list */}
        {searchedCities.length > 0 ? (
          searchedCities.map((data, index) => (
            <Card 
              key={data.id} 
              city={data.name} // Passing individual props
              country={data.country}
              aqi={data.aqi}
              pm25={data.pm25}
              o3={data.o3}
              status={data.status}
              delay={index * 0.1} // Adding a slight animation stagger
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.5, padding: '40px' }}>
            No results found for "{searchTerm}"
          </div>
        )}
      </main>

      <footer>
        <p>Made with Care • {new Date().getFullYear()}</p>
        <p style={{ fontSize: '0.7rem', marginTop: '10px' }}>Built using React Components & HOFs</p>
      </footer>
    </div>
  );
}

export default App;
