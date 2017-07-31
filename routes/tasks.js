const { Router } = require('express');

require('../db');

// Creating the tasks router
const tskRouter = Router();

tskRouter.get('/tasks', (req, res, next) =>  res.send('TASKS PAGE'));

module.exports = tskRouter;