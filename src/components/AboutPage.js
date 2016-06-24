import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import '../styles/about-page.css';
import {signupUser, loginUser} from '../actions/userActions.js';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this);
    this.props.signupUser({email: 'hello@hello.com', password: 'pass12', confirmPassword: 'pass12'});
  }
  render() {
    return (
      <div>
        <h2 className="alt-header">About dynamic 22</h2>
        <p>
        </p>
        <p>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
            <button onClick={this.onClick}>REQUEST</button>
            </p>
          </div>
    );
  }
}

export default connect(null, {signupUser, loginUser})(AboutPage);
