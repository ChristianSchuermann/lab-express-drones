// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Josh-800", propellers: 2, maxSpeed: 31 },
    { name: "Jaime v5", propellers: 4, maxSpeed: 32 },
    { name: "Lloyd-Ultra", propellers: 99, maxSpeed: 9000 },
    { name: "Ironhack M1", propellers: 29 , maxSpeed: 9063 }
    
  ];


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(drones)
  })
  .then( (drones) => {
     console.log(`created ${drones.length} drones`);
     mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });