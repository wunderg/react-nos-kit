// const passportConfig = require('./config/passport.js');
// import passportConfig from '../config/passport.js';

// const UserController = require('../controllers/userController.js');
// import passport from 'passport';
// import '../config/passport.js';

import UserController from '../controllers/userController.js';

// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

export default (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.use((req, res, next) => {
    console.log('API CALL');
    next();
  });

  // apiRouter.param('id', (req, res, next, id) => {
  //   //validate user or check some data
  //   next();
  // });

  // apiRouter.post('/login', UserController.postSignin);
  apiRouter.post('/signup', UserController.signup);
};

