const express = require('express');
const app = express();

app.use('/v1/calculate', require('./calculate/controller'));

if (process.argv.includes('--start')) {
  const port = process.env.PORT || 8080;
  console.log('Starting server on port ' + port);
  app.listen(port);
}

module.exports = app;
