const express = require('express');
const app = express();

require('./dataBase.js');

app.listen(5000, () => console.log('server on port 5000'));