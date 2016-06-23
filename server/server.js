import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// import appRouter from './routes/appRouter';
// import apiRouter from './routes/apiRouter';

const isProduction = process.env.NODE_ENV === 'production' ? true : false
const port = isProduction ? (process.env.PORT || 80) : 9000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// apiRouter(app, express);

  const staticPath = path.join(__dirname, './dist');
  app.use(express.static(staticPath));
  // appRouter(app, express, staticPath);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on Port ${port}`);
});
