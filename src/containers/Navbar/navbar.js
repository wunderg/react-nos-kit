import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import styles from './navbar_styles.js';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, value: 3};
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <FontIcon className="material-icons">home</FontIcon>
              <ToolbarTitle text="React-NOS" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
               <RaisedButton label="Signup" primary={true} />
                <RaisedButton label="Signin" primary={true} value="/add" />
                <FlatButton
                  containerElement={<Link to="/login" />}
                  label='SIGININ' />
          <Link to={`/`} className="brand-logo">PTC Portal</Link>
            </ToolbarGroup>
          </Toolbar>
      </div>
      );
    }
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={`/`} className="brand-logo">PTC Portal</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="fa fa-align-justify"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to={'/add'}>Add data</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li className="logout" onClick={this.props.logout}><Link to={''}>Logout</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to={'/add'}>Add data</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li><Link to={'/hiddenroute'}>Hidden Link</Link></li>
            <li onClick={this.props.logout}><Link to={''}>Loqout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default Navbar;
