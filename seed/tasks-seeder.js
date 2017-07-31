require('../db');

const Task = require('../models/Task');


const seedDataArray = [...Array(20).keys()].map(elem => {
  return {
    task: `Task ${elem}`,
    isDone: elem % 2 === 0
  };
});