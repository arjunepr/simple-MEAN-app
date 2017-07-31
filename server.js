require('dotenv').config();

// Pull in needed packages.
const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const { env } = require('process');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Routes
const index = require('./routes/index');
const tasks = require('./routes/tasks');


const app = express();

app.set('PORT', 3000);

app.set('views', join(__dirname, 'views'));

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Set Static Folder
app.use(express.static(join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);

const server = createServer(app);

server.listen(app.get('PORT'), () => {
  console.log("Express started on port ", app.get('PORT'));
});






if(env.NODE_ENV === 'TEST'){
  module.exports = app;
};