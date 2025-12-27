const express = require('express');
const { CosmosClient } = require('@azure/cosmos');
const path = require('path');

// Create the Express app & define port
const app = express();
const port = process.env.PORT || 3000;

// Middleware - Parse incoming JSON for POST requests
app.use(express.json());

// Middleware - Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html as homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
   });   

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
   });