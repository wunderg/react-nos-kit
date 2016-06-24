import express from 'express';
import compression from 'compression';
import logger from 'morgan';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import session from 'express-session';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import errorHandler from 'errorhandler';
import lusca from 'lusca';
import flash from 'express-flash';
import mongoose from 'mongoose';

import appRouter from './routes/appRouter.js';

dotenv.load({path: '.env'});

const MongoStore = require('connect-mongo')(session);
const isProduction = process.env.NODE_ENV === 'production' ? true : false
const port = isProduction ? (process.env.PORT || 80) : 9000;

const app = express();
const staticPath = path.join(__dirname, './');


mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});



app.use(compression());
app.use(expressValidator());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to /api, /contact or /
  if (/(api)|(contact)|(^\/$)/i.test(req.path)) {
    req.session.returnTo = req.path;
  }
  next();
});

app.use(express.static(staticPath));
appRouter(app, express, staticPath);

app.use(errorHandler());

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on Port ${port}`);
});
