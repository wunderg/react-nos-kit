import express from 'express';
import compression from 'compression';
import logger from 'morgan';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import errorHandler from 'errorhandler';
import lusca from 'lusca';
import mongoose from 'mongoose';

dotenv.load({path: '.env'});

import appRouter from './routes/appRouter.js';
import apiRouter from './routes/apiRouter.js';


const isProduction = process.env.NODE_ENV === 'production' ? true : false
const port = isProduction ? (process.env.PORT || 80) : 9000;

const app = express();
const staticPath = isProduction ? path.join(__dirname, './') : path.join(__dirname, '../dist');


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
app.use(passport.initialize());
app.use(passport.session());

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(express.static(staticPath));

appRouter(app, express, staticPath);
apiRouter(app, express, staticPath);


app.use(errorHandler());

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on Port ${port}`);
});
