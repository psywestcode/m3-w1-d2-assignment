const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser as instructed on Page 106
const routes = require('./routes/index');

const app = express();

// Configure views directory and assign Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware: Configure body-parser as instructed on Assignment Slide 106
app.use(bodyParser.urlencoded({ extended: true }));

// Delegate routing handling to routes/index.js
app.use('/', routes);

// Export the app instance for start.js
module.exports = app;