const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
app.use(express.static(path.join(__dirname, '../../build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.use('/spotify', routes);
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App listening on port ' + port);});