const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, '../../build')));
app.use('/spotify', routes);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App listening on port ' + port);});