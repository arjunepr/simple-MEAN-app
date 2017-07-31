const { Router } = require('express');

// Creating the index router
const idxRouter = Router();

idxRouter.get('/', (req, res, next) =>  res.render('index', {title: 'MEAN app with React tossed in...', name: 'Arjun'}));

module.exports = idxRouter;