const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

const augmentedRoutes = require('./routes/augmented.routes');
const virtualRoutes = require('./routes/virtual.routes');

app.use('/augmented', augmentedRoutes);
app.use('/virtual', virtualRoutes)

app.listen(port);

console.log('Server is running on port ' + port);