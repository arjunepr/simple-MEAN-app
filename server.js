require('dotenv').config();

const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const { createServer } = require('http');

const mongoose = require('mongoose');

const ON_DEATH = require('death')({uncaughtException: true});

let db;

const { env } = require('process');


if(env.NODE_ENV === 'PRODUCTION'){
  
  // Database access credentials in production.
  const username = env.USERNAME;
  const password = env.PASSWORD;
  const host = env.HOST;
  const port = env.PORT;
  const database = env.DATABASE;

  db = mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`)
};


if(env.NODE_ENV === 'DEVELOPMENT'){

  const devDB = env.DEV_DB

  db = mongoose.connect(`mongodb://localhost/${devDB}`);

};


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




// Gracefully cleaning up when exiting..

const cleanUp = (signal, err) => db.disconnect();

// The DEATH package helps in dealing with exceptions and termination signals.
ON_DEATH(cleanUp);

// For exits in general.
process.on('exit', cleanUp);
