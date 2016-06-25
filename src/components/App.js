import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from '../containers/Navbar/navbar.js';

const App = (props) => {
  injectTapEventPlugin();
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        MAIN COMPONENT 2 Yes
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
