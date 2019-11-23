var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var databaseApiRounter = require('./routes/database');
var updateRouter = require('./routes/update');
const interviewsRouter = require("./routes/interviews");
var calendarRouter = require('./routes/calendar');
const bodyparser = require("body-parser");
const db = require('./config/database');
const sequelize = require("sequelize");
const Op = sequelize.Op;

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/calendar', calendarRouter);
app.use('/api/data', databaseApiRounter);
app.use('/update', updateRouter);
app.use('/interviews', interviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//test the connection with the database
db.authenticate()//will cause an error if you don't have the database  :D "bdeehyat"
.then(()=>console.log('connected to database'))
.catch((err)=>console.log('Error' + err));
module.exports = app;


//to listen to this port on the local host
app.listen(3000);