const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const products = require('./routes/products')

const app = express();
const port = 3005


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/./client/dist'));


app.use('/api', products);

app.get('/bundle.js', (res, req) =>{
  if (err){console.err(err)}
  else {
    res.status(200).sendFile('./client/dist')
  }
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
  });

module.exports = app;
