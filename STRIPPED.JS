//STRIPPED DOWN 

//master file includes:
// PostgreSQL database setup
// Basic Express backend
// Simple React frontend
// Essential API endpoints
// Minimal styling


// Core dependencies
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432
});

// Express setup
const app = express();
app.use(cors());
app.use(express.json());

// Basic API endpoints
app.get('/api/vehicles', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM vehicles');
  res.json(rows);
});

app.post('/api/vehicles', async (req, res) => {
  const { brand, model, price, fuel_type } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO vehicles (brand, model, price, fuel_type) VALUES ($1, $2, $3, $4) RETURNING *',
    [brand, model, price, fuel_type]
  );
  res.json(rows[0]);
});

// Frontend React components
const App = () => {
  const [vehicles, setVehicles] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  return (
    <div>
      <h1>E-Vehicle Platform</h1>
      <div className="vehicle-list">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <h2>{vehicle.brand} {vehicle.model}</h2>
            <p>Price: ${vehicle.price}</p>
            <p>Fuel Type: {vehicle.fuel_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Basic styles
const styles = `
  .vehicle-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  .vehicle-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
`;

// Serve static files
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
