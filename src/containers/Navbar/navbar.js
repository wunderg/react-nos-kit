import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MediaQuery from 'react-responsive';

import styles from './navbar_styles.js';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, mobile: false};
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({mobile: true})
    }
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <MediaQuery maxDeviceWidth={800}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FontIcon className="material-icons">home</FontIcon>
                <ToolbarTitle text="React-NOS-Mobile" />
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarSeparator />
                <FlatButton
                  containerElement={<Link to="/login" />}
                  label='SIGININ' />
              </ToolbarGroup>
            </Toolbar>
          </MediaQuery>
          {/********** Desktop **********/}
          <MediaQuery minDeviceWidth={800}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FontIcon className="material-icons">home</FontIcon>
                <ToolbarSeparator style={styles.navbar_desktop.separator} />
                <ToolbarTitle text="React-NOS" />
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarSeparator style={styles.navbar_desktop.separator} />
                <FlatButton
                  style={styles.navbar_desktop.buttons}
                  primary={true}
                  containerElement={<Link to="/signin" />}
                  label='Signin' />
                <FlatButton
                  style={styles.navbar_desktop.buttons}
                  primary={true}
                  containerElement={<Link to="/signup" />}
                  label='Signup' />
              </ToolbarGroup>
            </Toolbar>
          </MediaQuery>
        </div>
      );
    }
    return (
        <div>
          <MediaQuery maxWidth={800}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FontIcon className="material-icons">home</FontIcon>
                <ToolbarTitle text="React-NOS" />
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarSeparator />
                <FlatButton
                  containerElement={<Link to="/login" />}
                  label='SIGININ' />
              </ToolbarGroup>
            </Toolbar>
          </MediaQuery>
          <MediaQuery minWidth={800}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FontIcon className="material-icons">home</FontIcon>
                <ToolbarSeparator style={styles.navbar_desktop.separator} />
                <ToolbarTitle text="React-NOS" />
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarSeparator style={styles.navbar_desktop.separator} />
                <FlatButton
                  style={styles.navbar_desktop.buttons}
                  primary={true}
                  containerElement={<Link to="/signin" />}
                  label='Signin' />
                <FlatButton
                  style={styles.navbar_desktop.buttons}
                  primary={true}
                  containerElement={<Link to="/signup" />}
                  label='Signup' />
              </ToolbarGroup>
            </Toolbar>
          </MediaQuery>
        </div>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default Navbar;
