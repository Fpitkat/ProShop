/**
 * Express server module.
 * @module server
 */

import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

/**
 * Route for the root endpoint.
 * @name GET /
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {string} - The response message.
 */

app.get('/', (req, res) => {
  res.send('API is running...');
});

/**
 * Route for getting all products.
 * @name GET /api/products
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object[]} - The array of products.
 */

app.get('/api/products', (req, res) => {
  res.json(products);
});

/**
 * Route for getting a specific product by ID.
 * @name GET /api/products/:id
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The product object.
 */

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

/**
 * Starts the server and listens on the specified port.
 * @name listen
 * @function
 * @param {number} PORT - The port number to listen on.
 * @param {Function} callback - The callback function to execute when the server starts.
 */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
