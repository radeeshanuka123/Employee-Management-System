/*const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const url = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db('loginDB'); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

module.exports = connectToDatabase;*/

const mongoose = require('mongoose');

async function connectToDatabase() {
  const url = 'mongodb://localhost:27017'; // Update with your MongoDB connection string

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

module.exports = connectToDatabase;