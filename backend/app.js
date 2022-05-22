const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorMidleware = require('./middleware/errors');

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

//import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const review = require('./routes/review');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);
app.use('/api/v1', review);

//middleware to handle error
app.use(errorMidleware);
module.exports = app;
