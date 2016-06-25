import passport from 'passport';
import UserController from '../controllers/userController.js';
import DataController from '../controllers/dataController.js';

import '../config/passport.js';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app, express) => {
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

  apiRouter.post('/login', requireSignin, UserController.signin);
  apiRouter.post('/signup', UserController.signup);
  apiRouter.get('/data', requireAuth, DataController.get);

};
