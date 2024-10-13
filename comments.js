// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/comments', function(req, res) {
    res.send('Hello World');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

// Run the server
// $ node comments.js
// Server is running on http://localhost:3000
// Open the browser and go to http://localhost:3000/comments
// Hello World