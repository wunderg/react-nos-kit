import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Signin from './containers/Auth/signin.js';
import Signup from './containers/Auth/signup.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="signin" component={Signin}/>
    <Route path="signup" component={Signup}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
