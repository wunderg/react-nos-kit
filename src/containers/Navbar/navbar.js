import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  componentDidMount() {
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <nav>
          <div className="nav-wrapper">
            <Link to={`/`} className="brand-logo">React-NOS</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="fa fa-align-justify"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><Link to={'/signin'}>Sign In</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to={'/signin'}>Sign In</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
            </ul>
          </div>
        </nav>
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
