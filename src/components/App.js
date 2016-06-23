import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>
      MAIN COMPONENT 1
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
