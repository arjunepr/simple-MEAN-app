module.exports = (function () {
  'use strict';

  const mongoose = require('mongoose');

  const ON_DEATH = require('death')({ uncaughtException: true });

  const { env } = require('process');

  let db;


  if (env.NODE_ENV === 'PRODUCTION') {

    // Database access credentials in production.
    const username = env.USERNAME;
    const password = env.PASSWORD;
    const host = env.HOST;
    const port = env.PORT;
    const database = env.DATABASE;

    db = mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`)
  };


  if (env.NODE_ENV === 'DEVELOPMENT') {

    const devDB = env.DEV_DB

    db = mongoose.connect(`mongodb://localhost/${devDB}`);

  };

  // Gracefully cleaning up when exiting..

  const cleanUp = (signal, err) => db.disconnect();

  // The DEATH package helps in dealing with exceptions and termination signals.
  ON_DEATH(cleanUp);
})();