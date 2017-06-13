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

const port = process.env.PORT ||
	process.env.NODE_ENV === 'production' ? 5050 : 3000;
app.listen(port, function () {
  console.log('App listening on port ' + port);});