
// itec640 it-project-management group4 project
// fully-operationAL e-comm site for e-vehicle & hybrid national sales rollout

// source-code & master-file by:  Alex Osterneck, CLA, MSCS  //  ai70000, Ltd  //  January 23rd, 2025





// File Type Recommendation: 
// JavaScript Project with Node.js Backend:

// Save main entry point as server.js (or index.js) in root directory to align w/ Node.js since backend is mostly JavaScript.

// Project Structure for Multi-Language Code:
// organize other components (e.g., frontend, DB, deployment scripts) into subdirectories within project folder.
// example:
// /project-root
  /backend       --> Node.js backend files
  /frontend      --> React.js or Angular frontend files
  /config        --> Configuration files (e.g., MongoDB, AWS credentials)
  /scripts       --> Bash, YAML, or Terraform deployment files
  server.js      --> Main entry point for the Node.js backend

// Use a .env File:
// Store environment variables (e.g., API keys, database URIs) in a .env file for easy management & platform compatibility.
// For Visual Studio 2022:
// Save entire project as part of a Node.js Solution in Visual Studio, if IDE supports it: Use File > New Project > JavaScript/Node.js template.
// Import or manage files from existing project structure.
// Version Control: Initialize Git repoy and commit entire project structure.
// use gitignore file to exclude sensitive or unnecessary files (e.g., node_modules, .env).
// final Save Format: Save as directory-based project, with server.js as main file.
// master-file should act as entry point to glue everything together (backend APIs, integrations, etc.).


///*******************************

  /*******************************
   PROJECT OVERVIEW & STRUCTURE
  ----------------------------

  ## OVERVIEW
  This project involves designing and launching an advanced e-commerce platform specializing in the sale of electric and hybrid vehicles. The platform includes features such as 3D vehicle models, real-time financing calculators, AI-based recommendations, and integrations with AWS and MongoDB.

  ## DIRECTORY STRUCTURE
  /backend         --> Backend source code (Node.js APIs, database integration)
      /models           --> Database models (e.g., Vehicle.js, User.js)
      /routes           --> API routes (e.g., vehicleRoutes.js, authRoutes.js)
      /controllers      --> Route logic (e.g., vehicleController.js)
      /middlewares      --> Custom middleware (e.g., error handling, auth checks)
      /services         --> External services (e.g., AWS Cognito, MongoDB)
      server.js         --> Main backend entry point

  /frontend        --> Frontend source code (React.js or Angular)
      /components       --> Reusable UI components (e.g., Header.js, Footer.js)
      /pages            --> Page-level components (e.g., Home.js, Inventory.js)
      /state            --> State management (Redux/Context API)
      App.js            --> Main frontend entry point

  /config          --> Configuration files (e.g., environment variables, AWS keys)
  /docs            --> Project documentation (requirements, API reference, etc.)
  /scripts         --> Deployment and CI/CD scripts (e.g., GitHub Actions YAML)
  /tests           --> Unit and integration tests

  package.json     --> Node.js dependencies
  .env             --> Environment variables
  README.md        --> Project overview and "story path" documentation


  ## PROJECT REQUIREMENTS & CODE MAPPING
  ### 1. Introduction
  - Covered in this file's comments and `README.md`.

  ### 2. Backend
  - **Database Models**: `/backend/models/Vehicle.js`, `/backend/models/User.js`
  - **API Endpoints**: `/backend/routes/vehicleRoutes.js`

  ### 3. Frontend
  - **UI Components**: `/frontend/components/Header.js`, `/frontend/pages/Home.js`
  - **State Management**: `/frontend/state/`

  ### 4. Deployment
  - **CI/CD Pipeline**: `/scripts/ci-cd-pipeline.yml`
  - **Hosting**: `/scripts/deploy.sh`

  ### 5. APIs
  - **GET /api/vehicles**: Fetch all vehicles (see `/backend/controllers/vehicleController.js`).
  - **POST /api/vehicles**: Add a new vehicle (see `/backend/controllers/vehicleController.js`).

  ## DEPLOYMENT GUIDE
  ### AWS Deployment Steps
  1. **Backend**:
     - Deploy to AWS EC2 with PM2 and Nginx (see `/scripts/deploy.sh`).
  2. **Frontend**:
     - Deploy static assets to S3 (see `/scripts/deploy.sh`).
  3. **CI/CD**:
     - Automate using GitHub Actions (see `/scripts/ci-cd-pipeline.yml`).


********************************/









//// source-code & master-file by:  Alex Osterneck, CLA, MSCS // ai70000, Ltd // January 23rd, 2025



//START: FRONTEND 'FRAMEWORK' CODE

//foundational implementation of the frontend framework using React.js 
//includes setting up a basic structure, integrating routing, and preparing a foundation for advanced features like state management (via Redux or Context API).
//JAVASCRIPT


//1. React.js Setup: Directory Structure

/src
  /components
    Header.js
    Footer.js
    VehicleSearch.js
    VehicleDetail.js
    Customization.js
  /pages
    Home.js
    Inventory.js
    Checkout.js
  /redux (if using Redux for state management)
  App.js
  index.js


//2. Base Code: index.js

  import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Add Tailwind or Bootstrap

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


//2. Base Code: app.js 

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


//2. Base Code: components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AutoHub</h1>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/inventory" className="mx-2">Inventory</Link>
        <Link to="/checkout" className="mx-2">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;


//2. Base Code: pages/Home.js

import React from 'react';

const Home = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to AutoHub</h1>
      <p>Find the perfect electric or hybrid vehicle for you.</p>
    </main>
  );
};

export default Home;


//2. Base Code: pages/Inventory.js

import React from 'react';

const Inventory = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Our Inventory</h1>
      {/* Add VehicleSearch component */}
    </main>
  );
};

export default Inventory;


//2. Base Code: pages/Checkout.js

import React from 'react';

const Checkout = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Complete your purchase securely.</p>
    </main>
  );
};

export default Checkout;


//2. Base Code: components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} AutoHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


//3. Styling: To use Tailwind CSS, install it via npm and configure:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


//Add this to tailwind.config.js:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


//Add this to index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

//Next Steps: Add state management (Redux or Context API) for user interactions like filters, customization, and cart management.
//Create reusable components like VehicleSearch, VehicleCard, and CustomizationForm. Integrate APIs (e.g., fetching inventory).

//END: START: FRONTEND 'FRAMEWORK' CODE







//START: 'SYTLING' CODE
//TAILWIND CSS

//1. Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


//2. Configure Tailwind
Update the tailwind.config.js file to specify the paths to your template files:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//3. Include Tailwind in Your CSS
Add the following to your index.css file:

@tailwind base;
@tailwind components;
@tailwind utilities;


//4. Styling Examples: HEADER Component

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AutoHub</h1>
      <nav>
        <a href="/" className="mx-2 hover:underline">Home</a>
        <a href="/inventory" className="mx-2 hover:underline">Inventory</a>
        <a href="/checkout" className="mx-2 hover:underline">Checkout</a>
      </nav>
    </header>
  );
};


//4. Styling Examples: BUTTON Component 

const Button = ({ text }) => {
  return (
    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
      {text}
    </button>
  );
};


//4. Styling Examples: CARD Component

const VehicleCard = ({ title, image, price }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">Price: ${price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};


//END: 'SYTLING' CODE






//START: 'STATE-MANAGEMENT' CODE
//CONTEXT API


//1. Create a Global Context: StateContext.js
 
 import React, { createContext, useReducer, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  vehicles: [],
  cart: [],
  filters: {
    brand: '',
    priceRange: [0, 100000],
    fuelType: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VEHICLES':
      return { ...state, vehicles: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);


//2. Wrap the App in the StateProvider: index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateProvider } from './StateContext';

ReactDOM.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


//3. Use the State in Components: VehicleSearch.js

import React from 'react';
import { useStateValue } from '../StateContext';

const VehicleSearch = () => {
  const { state, dispatch } = useStateValue();

  const applyFilters = () => {
    const filteredVehicles = state.vehicles.filter(
      (vehicle) =>
        (!state.filters.brand || vehicle.brand === state.filters.brand) &&
        vehicle.price >= state.filters.priceRange[0] &&
        vehicle.price <= state.filters.priceRange[1] &&
        (!state.filters.fuelType || vehicle.fuelType === state.filters.fuelType)
    );
    dispatch({ type: 'SET_VEHICLES', payload: filteredVehicles });
  };

  return (
    <div>
      <h2>Search Vehicles</h2>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default VehicleSearch;

//END: 'STATE-MANAGEMENT' CODE






//START: BACKEND 'FRAMEWORK' CODE
//foundational implementation of the backend framework using Node.js with Express.js. 
//includeS routing, database connection, and API design. 


//1. Project Setup

//A) Initialize the project:
mkdir backend
cd backend
npm init -y

//B) Install dependendicies:
npm install express mongoose dotenv body-parser cors

//C) Install dev tools:
npm install --save-dev nodemon


//2. Project Structure
backend/
├── .env
├── server.js
├── config/
│   └── db.js
├── models/
│   └── Vehicle.js
├── routes/
│   └── vehicleRoutes.js
└── controllers/
    └── vehicleController.js


//3. Database Connection (MongoDB Example): config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

//3. Add a .env file in the root directory:
MONGO_URI=mongodb://localhost:27017/autoHubDB
PORT=5000

//4. Model Definition: models/Vehicle.js
const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    fuelType: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);

//5. Routes and Controllers: routes/vehicleRoutes.js
const express = require('express');
const {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;

//5. controllers/vehicleController.js
const Vehicle = require('../models/Vehicle');

// Get all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get vehicle by ID
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vehicle
const createVehicle = async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update vehicle by ID
const updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedVehicle) {
      res.status(200).json(updatedVehicle);
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete vehicle by ID
const deleteVehicle = async (req, res) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
      res.status(200).json({ message: 'Vehicle deleted' });
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};


//6. Main Server File: server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//6. Test the API

//A) Run the server:
npm run start

//B) Use Postman or cURL to test the endpoints: 
// GET /api/vehicles
// POST /api/vehicles with a JSON body
{
  "brand": "Tesla",
  "model": "Model S",
  "price": 79999,
  "fuelType": "Electric"
}

//END: BACKEND 'FRAMEWORK' CODE






//START: BACKEND 'DATABASE' CODE

//Implementation of backend database setup using MongoDB exclusively for our itec640 e-commerce platform.
//using MongoDB (exclusively) will equal ~200 less LOC than if we used PostGreSQL, you're welcome
//MongoDB is NoSQL DB which stores data in flexible, JSON-like format, we'll use Mongoose ODM (Object Document Mapper) for MongoDB, to manage schema & interact w/ DB. 


//1. Database Configuration: Project Structure (Backend Directory)

backend/
├── .env
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── Vehicle.js
│   ├── User.js
│   └── Order.js
├── routes/
│   ├── vehicleRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
└── controllers/
    ├── vehicleController.js
    ├── userController.js
    └── orderController.js


//2. MongoDB Connection: config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;


//3. Models: VEHICLE Model - Represents a vehicle in the platform's inventory: models/Vehicle.js

const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    fuelType: { type: String, required: true },
    available: { type: Boolean, default: true },
    colorOptions: { type: [String] }, // e.g., ['Red', 'Blue', 'Black']
    additionalFeatures: { type: [String] }, // e.g., ['Sunroof', 'Heated Seats']
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);


//3. USER Model: Represents a customer or admin user: models/User.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);


//3. ORDER Model: Represents customer orders: models/Order.js

const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
    paymentStatus: { type: String, default: 'Pending' },
    deliveryStatus: { type: String, default: 'Processing' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);


//4. Environment Configuration: Create a .env file in your root directory

MONGO_URI=mongodb://localhost:27017/autoHubDB
PORT=5000
JWT_SECRET=your_jwt_secret_key



//5. Seed Data (Optional) create a script to populate DB w/ test data: seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Vehicle = require('./models/Vehicle');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedVehicles = async () => {
  await Vehicle.deleteMany();

  const vehicles = [
    {
      brand: 'Tesla',
      model: 'Model S',
      price: 79999,
      fuelType: 'Electric',
      available: true,
      colorOptions: ['Red', 'White', 'Black'],
      additionalFeatures: ['Autopilot', 'Panoramic Roof'],
    },
    {
      brand: 'Toyota',
      model: 'Prius',
      price: 24999,
      fuelType: 'Hybrid',
      available: true,
      colorOptions: ['Blue', 'Silver'],
      additionalFeatures: ['Bluetooth', 'Backup Camera'],
    },
  ];

  await Vehicle.insertMany(vehicles);
  console.log('Database seeded successfully');
  process.exit();
};

seedVehicles();


//5. Run the script:

node seed.js


//6. Main Server File: server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//7. Example Routes: routes/vehicleRoutes.js

const express = require('express');
const {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;


//7. controllers/vehicleController.js

const Vehicle = require('../models/Vehicle');

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};

//END: BACKEND 'DATABASE' CODE







//START: "APIs: REST/GraphQL" CODE

//implementation of APIs using REST & GraphQL for e-comm backend w/ MongoDB.


//1. REST API Implementation using Express.js, REST API endpoints structured as:


//1. VEHICLE ROUTES: routes/vehicleRoutes.js

const express = require('express');
const {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getAllVehicles); // GET all vehicles
router.get('/:id', getVehicleById); // GET a single vehicle by ID
router.post('/', createVehicle); // POST to create a new vehicle
router.put('/:id', updateVehicle); // PUT to update a vehicle by ID
router.delete('/:id', deleteVehicle); // DELETE a vehicle by ID

module.exports = router;


//VEHICLE ROUTES: controllers/vehicleController.js

const Vehicle = require('../models/Vehicle');

// GET all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a single vehicle by ID
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST to create a new vehicle
const createVehicle = async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT to update a vehicle by ID
const updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedVehicle) {
      res.status(200).json(updatedVehicle);
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a vehicle by ID
const deleteVehicle = async (req, res) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
      res.status(200).json({ message: 'Vehicle deleted' });
    } else {
      res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};


//1. Server Integration: server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//2. GraphQL API Implementation: Using Apollo Server, the GraphQL API is set up like this:

//2. Install Dependencies
npm install @apollo/server graphql mongoose

//2. Define Schema and Resolvers: graphql/schema.js
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Vehicle {
    id: ID!
    brand: String!
    model: String!
    price: Float!
    fuelType: String!
    available: Boolean
    colorOptions: [String]
    additionalFeatures: [String]
  }

  type Query {
    getVehicles: [Vehicle]
    getVehicleById(id: ID!): Vehicle
  }

  type Mutation {
    createVehicle(
      brand: String!
      model: String!
      price: Float!
      fuelType: String!
      available: Boolean
      colorOptions: [String]
      additionalFeatures: [String]
    ): Vehicle

    updateVehicle(
      id: ID!
      brand: String
      model: String
      price: Float
      fuelType: String
      available: Boolean
      colorOptions: [String]
      additionalFeatures: [String]
    ): Vehicle

    deleteVehicle(id: ID!): String
  }
`;

module.exports = typeDefs;


//2. graphql/resolvers.js
const Vehicle = require('../models/Vehicle');

const resolvers = {
  Query: {
    getVehicles: async () => {
      return await Vehicle.find();
    },
    getVehicleById: async (_, { id }) => {
      return await Vehicle.findById(id);
    },
  },
  Mutation: {
    createVehicle: async (_, args) => {
      const newVehicle = new Vehicle(args);
      return await newVehicle.save();
    },
    updateVehicle: async (_, { id, ...updateData }) => {
      return await Vehicle.findByIdAndUpdate(id, updateData, { new: true });
    },
    deleteVehicle: async (_, { id }) => {
      const vehicle = await Vehicle.findByIdAndDelete(id);
      if (vehicle) return 'Vehicle deleted successfully';
      return 'Vehicle not found';
    },
  },
};

module.exports = resolvers;


//2. GraphQL Server Setup: graphql/index.js
const { ApolloServer } = require('@apollo/server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const startGraphQLServer = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use('/graphql', server.getMiddleware());
};

module.exports = startGraphQLServer;


//2. Integrate with Express: server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const startGraphQLServer = require('./graphql/index');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Start GraphQL Server
startGraphQLServer(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//API Testing 
//REST API: Use tools Postman or cURL to test endpoints (e.g., GET /api/vehicles, POST /api/vehicles).
//GraphQL API: Access GraphQL Playground at http://localhost:5000/graphql to run queries & mutations.

//END: "APIs: REST/GraphQL" CODE





//START: "Cloud and Hosting: Cloud Provider" CODE

//seamless integration with tech-stack via AWS w/ integration w/ Node.js, MongoDB, and required backend services. 
//step-by-step implementation for AWS Cloud Hosting using EC2 and S3:

//1. AWS Cloud Hosting Setup


//Step 1: Launch an EC2 Instance

//Log into AWS Console, navigate to EC2.
//Click Launch Instance and: Choose Amazon Linux 2 AMI or Ubuntu 20.04 LTS.
//Select instance type (e.g., t2.micro for free-tier).
//Configure security group rules:
//Open port 22 (SSH) for your IP address.
//Open port 5000 (for backend server).
//Attach Elastic IP for consistent access.
//Launch instance and connect via SSH

ssh -i "your-key.pem" ec2-user@your-ec2-public-ip


//Step 2: Install Node.js and MongoDB

// A) Update and install Node.js:
sudo yum update -y
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs

// B) Install MongoDB: 
sudo yum install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod


//Step 3: Deploy the Backend Application

// A) Clone backend repository to instance:
git clone https://github.com/your-repo/your-backend.git
cd your-backend

// B) Install dependencies:
npm install

// C) Create a .env file with the following:
MONGO_URI=mongodb://localhost:27017/autoHubDB
PORT=5000

// D) Start the application:
npm run start

// E) To run application continuously, use PM2:
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save


//Step 4: Configure Nginx as Reverse Proxy:

// A) Install Nginx:
sudo yum install -y nginx

// B) Configure Nginx:
sudo nano /etc/nginx/nginx.conf

// B) Add configuration for backend:
server {
    listen 80;
    server_name your-ec2-public-ip;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

// C) Restart Nginx:
sudo systemctl restart nginx


//2. AWS S3 for Static File Hosting: to host static assets (images, JavaScript, CSS), use Amazon S3:

// A) Create an S3 Bucket: Go to S3 Console and create a bucket, Enable public access for bucket, Use Versioning for better management.
// B) Upload Files: Manually upload assets to the bucket, or, use AWS CLI:

aws s3 cp ./static s3://your-bucket-name --recursive


// C) Configure S3 as Static Website: In bucket settings enable Static Website Hosting, Provide index.html as default document


//3. AWS Cloud Integration with MongoDB Atlas 
// A) Set Up MongoDB Atlas: Create free cluster at MongoDB Atlas, Whitelist EC2 instance's IP address in Atlas settings.
// B) Update .env File:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/autoHubDB

// C) Restart the backend to use the Atlas connection:

pm2 restart all


//4. Finalize & Test Deployment: Access application via Elastic IP or domain (if configured w/ Route 53), Test API endpoints using Postman tool.


//END: "Cloud and Hosting: Cloud Provider" CODE






//START: "CI/CD Pipeline" CODE:

//GitHub-Actions for CI/CD pipeline to integrate seamlessly with ecomm-project and minimizes LOC. 

//1.Create Workflow File: In GitHub repo, navigate to .github/workflows/  and create new file named: ci-cd-pipeline.yml.

//2. Pipeline Config: workflow to automate test-build-deploy our itec640 group4 backend to AWS EC2: ci-cd-pipeline.yml:

name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the code
      - name: Checkout Code
        uses: actions/checkout@v3

      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      # Step 3: Install dependencies
      - name: Install Dependencies
        run: npm install

      # Step 4: Run Tests
      - name: Run Tests
        run: npm test

      # Step 5: Build the Project
      - name: Build Project
        run: npm run build

      # Step 6: Deploy to AWS EC2
      - name: Deploy to AWS EC2
        uses: appleboy/ssh-action@v0.1.4
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_KEY }}
          port: 22
          script: |
            cd /var/www/your-backend
            git pull origin main
            npm install
            pm2 restart all


//3. Secrets Config: Go to GitHub repo: Navigate to Settings > Secrets and variables > Actions > New repository secret.
// Add following secrets:

// EC2_HOST: Your EC2 instance public IP address.
// EC2_USER: Your EC2 instance username (e.g., ec2-user).
// EC2_KEY: Your private SSH key content (add as plain text).


//4. Workflow Explanation
//Trigger: workflow runs automatically whenever code  pushed to  main branch.
//Steps:
//Checkout Code: Pulls latest code from repo.
//Set up Node.js: Preps environment w/ specified Node.js version.
//Install Dependencies: using npm install.
//Run Tests: Executes test-suite w/ npm test.
//Build Project: Runs build script (if applicable).
//Deploy to AWS EC2: Uses SSH connection to: Pull latest code, Install dependencies, Restart application using PM2.


//5. Advantages of GitHub-Actions: Low LOC: YAML file is concise, integrated into GitHub w/ no need for Jenkins, flexibile extendable to include Docker & S3 uploads.

//END: "CI/CD Pipeline" CODE





//START: "Monitoring" CODE

// 1. Install Datadog Agent: Create Datadog Account: Sign up at Datadog. Install Datadog Agent: SSH into AWS EC2 instance: Install agent using commands provided in Datadog onboarding process. 
// For example, on Amazon Linux:
DD_API_KEY=your_api_key bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script.sh)"

// 2. Integrate Datadog with Node.js

// A) Install Datadog library in application:
npm install dd-trace

// B) Initialize Datadog in application entry point (e.g., server.js):
const tracer = require('dd-trace').init({
  service: 'autoHub-backend',
  env: process.env.NODE_ENV || 'production',
});

// C) Add additional custom tracing as needed in application:
tracer.trace('vehicle_query', () => {
  // Code you want to monitor (e.g., a MongoDB query)
});

// 3. Configure Datadog Agent

// A) Modify agent config file:
sudo nano /etc/datadog-agent/datadog.yaml

// B) Add app environment and tags for monitoring:
env: production
tags:
  - service:autoHub-backend
  - team:backend

// C) Restart the agent:
sudo service datadog-agent restart


// 4. Set Up Alerts & Dashboards
// Log into Datadog go to Dashboards section, Create new dashboard to monitor:
// CPU Usage, Memory Usage, Request Latency, Errors per second
// Set up Alerts for critical thresholds (e.g., 80% CPU or 500ms request latency): Navigate to Monitors > New Monitor.
// Choose metrics: cpu.utilization, system.mem.usage.


//5. Monitor app logs in Datadog

// A) Install Winston Datadog Transport:
npm install winston @datadog/winston

// B) Configure logger in server.js:
const winston = require('winston');
const { DatadogTransport } = require('@datadog/winston');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new DatadogTransport({
      apiKey: 'your_datadog_api_key',
      ddsource: 'nodejs',
      service: 'autoHub-backend',
    }),
  ],
});

logger.info('Application started');


// C) Ensure Datadog Agent configured to forward logs.

//Advantages of Datadog: Seamless AWS Integration to monitor EC2, S3, Custom Metrics to track specific appl metrics & DB-queries, real-time alerts of performance.

//END: "Monitoring" CODE






//START: "SECURITY" CODE


// 1) "SECURITY: OAuth2 for authentication"


//Since rest of the itec640 e-comm project is AWS-focused, using AWS Cognito for authentication will be the easiest integration and fewer LOC, (than say Google Auth). 
//AWS Cognito integrates directly w/ S3, EC2, via built-in OAuth2 Support. You're welcome.

//AWS Cognito Implementation (OAuth2)

//1. Set Up AWS Cognito: Go to AWS Cognito Console: Create User Pool: Name: autoHubUserPool. Config pool to allow username, email, or both as sign-in options.
// Enable OAuth2 flows like Authorization Code Grant and configure callback URLs (e.g., http://localhost:5000/auth/callback).
// Create App Client: Disable "Generate Client Secret" option for simplicity (not needed for public client web apps).
// Copy App Client ID and App Client Secret.
// Set Up Domain: Config Cognito-hosted domain (e.g., autohub.auth.us-east-1.amazoncognito.com).

//2. Install Dependencies: Install required packages:
npm install amazon-cognito-identity-js passport passport-oauth2 dotenv

//3. Passport Config for Cognito: config/passport.js
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: `https://your-cognito-domain.auth.us-east-1.amazoncognito.com/oauth2/authorize`,
      tokenURL: `https://your-cognito-domain.auth.us-east-1.amazoncognito.com/oauth2/token`,
      clientID: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      callbackURL: '/auth/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // Simulate user retrieval/creation
      const user = { accessToken, profile };
      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//4. Authentication Routes: routes/authRoutes.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

// Initiate login with AWS Cognito
router.get('/login', passport.authenticate('oauth2'));

// Handle Cognito callback
router.get(
  '/callback',
  passport.authenticate('oauth2', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard'); // Redirect to dashboard on success
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;


//5. Integrate into Express App: server.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Passport configuration

const authRoutes = require('./routes/authRoutes');

const app = express();

// Session management middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Example protected route
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/login');
  }
  res.send(`Welcome, authenticated user!`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//6. Environment Variables: Add following to .env:
// COGNITO_CLIENT_ID=your_cognito_client_id
// COGNITO_CLIENT_SECRET=your_cognito_client_secret
// COGNITO_DOMAIN=your-cognito-domain.auth.us-east-1.amazoncognito.com
// SESSION_SECRET=your_session_secret

//Cognito is cost-effectient: Pay-as-you-go model w/ free-tier for 50,000 monthly active users.


// 2) "SECURITY: Security: SSL/TLS encryption"
//implementation of SSL/TLS encryption for Node.js backend using HTTPS w/ SSL cert, self-signed cert for local-dev integrated w/ Let’s Encrypt.

// 1. Install Required Dependencies: package:
npm install https

// 2. Generate SSL/TLS Cert (Dev Environment)
// For local dev, generate self-signed SSL cert:
//Run command:
openssl req -nodes -new -x509 -keyout server.key -out server.cert

//Provide required details when prompted (e.g., country, organization) to generate two files:
// server.key (private key)
// server.cert (self-signed certificate)

// 3. Modify Server to Use HTTPS: Update server.js file to serve requests over HTTPS: server.js
const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

// Import routes and other dependencies
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, secure world!');
});

// Load SSL certificate and private key
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Start the HTTPS server
const PORT = process.env.PORT || 5000;
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`Secure server running on https://localhost:${PORT}`);
});


// 4. Config SSL/TLS for Production (Let’s Encrypt): For production use Let’s Encrypt to issue free SSL cert.
// Using Certbot to Obtain SSL Cert

// A) Install Certbot on server (e.g., AWS EC2):
sudo apt update
sudo apt install certbot python3-certbot-nginx

// B) Config Certbot w/ Nginx: ensure backend is behind an Nginx reverse proxy (config in previous steps): Run following command:
sudo certbot --nginx

// C) Test Auto-Renewal: Certbot automatically renews SSL cert: Test renewal process
sudo certbot renew --dry-run


// 5. Update Nginx Config: Modify Nginx config to use SSL cert: /etc/nginx/sites-available/default
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name your-domain.com;

    return 301 https://$host$request_uri;
}


// Restart Nginx:
sudo systemctl restart nginx


// 6. Test SSL Config, Visit domain (e.g., https://your-domain.com) to verify HTTPS setup. Use SSL Labs tool to test SSL implementation.



// 3) "SECURITY: "Web Application Firewall (WAF)"
// implement Web App Firewall (WAF) w/ AWS-infrastructure to integrate API Gateway, Application Load Balancer (ALB), and CloudFront.
// here’s set up and config for AWS WAF:

// A) AWS WAF Setup: Log into AWS Management Console: Navigate to AWS WAF Console: Create Web ACL: 
// Click Create web ACL: Name= autoHubWebACL  Scope: Regional (if using ALB or API Gateway) or CloudFront (if using CloudFront for distribution).
// Rules: Add managed rules from AWS:
// AWS-AWSManagedRulesCommonRuleSet: Protects against SQL injection, XSS, etc.
// AWS-AWSManagedRulesKnownBadInputsRuleSet: Blocks malicious payloads.
// AWS-AWSManagedRulesAnonymousIpList: Blocks requests from known proxies, Tor nodes, etc.
// add custom rules: Block specific IPs or countries (you're welcome)
// Associate with a Resource: If using ALB: Select ALB, If using CloudFront: Select CloudFront distribution.

// B) Backend Code for WAF Integration: don’t modify Node.js backend for WAF, but ensure ALB or CloudFront is forwarding requests properly: server.js
// Ensure backend logs blocked requests for troubleshooting: 
const express = require('express');
const app = express();

app.use(express.json());

// Middleware to log requests (for debugging blocked traffic)
app.use((req, res, next) => {
  console.log(`[INFO] Request received: ${req.method} ${req.url}`);
  next();
});

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the AutoHub backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// C) 3. Example Custom Rule: block specific IPs or patterns using WAF:
// Go to Web ACL in AWS WAF: Add a custom rule: Rule Builder → IP set match: Add IP set of malicious IPs to block: Set rule action to Block.

// D) Verify WAF Functionality: Use curl tool to simulate blocked traffic, and, check WAF metrics in AWS WAF Console under Monitoring
curl -H "User-Agent: bad-bot" http://your-api-endpoint

// E) Automate WAF Deployment w/ Infrastructure as Code: use AWS CloudFormation or Terraform to automate WAF setup. 
// sample CloudFormation template:
Resources:
  WebACL:
    Type: AWS::WAFv2::WebACL
    Properties:
      Name: autoHubWebACL
      Scope: REGIONAL
      DefaultAction:
        Allow: {}
      VisibilityConfig:
        SampledRequestsEnabled: true
        CloudWatchMetricsEnabled: true
        MetricName: autoHubWebACL
      Rules:
        - Name: AWSManagedRulesCommon
          Priority: 1
          OverrideAction:
            None: {}
          VisibilityConfig:
            SampledRequestsEnabled: true
            CloudWatchMetricsEnabled: true
            MetricName: AWSManagedRulesCommon
          Statement:
            ManagedRuleGroupStatement:
              VendorName: AWS
              Name: AWSManagedRulesCommonRuleSet

//Deploy template:
aws cloudformation deploy --template-file template.yml --stack-name autoHubWAF

//AWS WAF is easy to use: Fully managed integrattion with AWS resources, defends against  web exploits (SQLi, XSS, bad bots, etc.), scalable with our itec640 ecomm project traffic

//END: "SECURITY" CODE











































































