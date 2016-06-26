import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from '../containers/Navbar/navbar.js';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        MAIN COMPONENT 2 Yes no
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
