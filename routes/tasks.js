require('../db');


const { Router } = require('express');
const Task = require('../models/Task');

// Creating the tasks router
const tskRouter = Router();

tskRouter.get('/tasks', async function(req, res, next){
  try {

    const tasks = await Task.find({});
  
    res.json(tasks);
  
  } catch (e){

    res.send(e);

  }
});

module.exports = tskRouter;