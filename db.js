module.exports = (function () {
  'use strict';

  const mongoose = require('mongoose');

  mongoose.Promise = global.Promise;

  const ON_DEATH = require('death')({ uncaughtException: true });

  const { env } = require('process');

  const { NODE_ENV } = env;

  let db;


  if (NODE_ENV === 'PRODUCTION') {

    // Database access credentials in production.
    const username = env.USERNAME;
    const password = env.PASSWORD;
    const host = env.HOST;
    const port = env.PORT;
    const database = env.DATABASE;

    db = mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`)
  };


  if (NODE_ENV === 'DEVELOPMENT' || NODE_ENV === 'TEST') {

    const devDB = env.DEV_DB

    db = mongoose.connect(`mongodb://localhost/${devDB}`);

  };

  // Gracefully cleaning up when exiting..

  const cleanUp = (signal, err) => db.disconnect();

  // The DEATH package helps in dealing with exceptions and termination signals.
  ON_DEATH(cleanUp);
})();