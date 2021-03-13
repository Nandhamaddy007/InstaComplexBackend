var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
app.use('/', indexRouter);
app.use('/users', usersRouter);

var corsOptions = {
	    origin: 'http://localhost:3000',
	    optionsSuccessStatus: 200 // For legacy browser support
	}

	app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
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
const port = process.env.PORT || 3001
const url='mongodb+srv://SoftwareDevelopingEngineer:SDEPassword@instacomplextest01.ninmi.mongodb.net/InstaComplexTest?retryWrites=true&w=majority'
	 const connectionParams={
		    useNewUrlParser: true,
		    useCreateIndex: true,
		    useUnifiedTopology: true 
		}
		mongoose.connect(url,connectionParams)
		    .then( () => {
		    	console.log('Connection Successfully...');		    	
		    })
		    .catch( (err) => {
		    	console.log('couldtt connect')
		        console.error(`Error connecting to the database. \n${err}`);
		    })
app.listen(port,()=>{
    console.log('server running at 3001...');    
});

module.exports = app;
