const express    = require('express');
const env        = require('./src/config/env');
const bodyParser = require('body-parser');
const path       = require('path');
const session    = require('express-session');

require('./src/db/mongoose');

/* All Routers */
const registrationUserRouter = require('./src/routers/users/users');

/* Init express */
const app = express();

/* Protect Routes */
//app.use(rjwt({ secret: env.JWT_KEY }).unless({ path: ['/auth'] }));

/* Base settings */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ 
    secret            : 'passport-tutorial', 
    cookie            : { maxAge: 60000 }, 
    resave            : false, 
    saveUninitialized : false }
  ));

/**CORS Policy */
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

/**Use routers */
app.use('/users', registrationUserRouter);

  /**Listening port */
app.listen(env.PORT, () => {
    console.log(`Server is running on port: ${env.PORT}`);
})