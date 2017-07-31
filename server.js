require('dotenv').config();

const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');


const index = require('./routes/index');
const tasks = require('./routes/tasks');



const app = express();

app.set('PORT', 3000);

const server = require('http').createServer(app);

// View Engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Set Static Folder
app.use(express.static(join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);

server.listen(app.get('PORT'), () => {
  console.log("Express started on port ", app.get('PORT'));
});