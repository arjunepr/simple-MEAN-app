const { Router } = require('express');

// Creating the index router
const idxRouter = Router();

idxRouter.get('/', (req, res, next) =>  res.send('INDEX PAGE'));

module.exports = idxRouter;