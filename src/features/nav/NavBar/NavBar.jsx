import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

const logoText = {
  fontFamily: 'Righteous',
  fontSize: '1.8em',
  color: 'black'
};

const navStyles = {
  marginTop: '10px'
};

const mapState = state => ({
  auth: state.firebase.auth
})

class NavBar extends Component {
  handleLogOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/')
  };
  render() {
    const { auth } = this.props
    return (
      <Menu size="huge" fixed="top" text style={navStyles}>
        <Menu.Item as={Link} to='/pickups'>
          <Header style={logoText}>p i c k u p s</Header>
        </Menu.Item>
        {!auth.isEmpty && <SignedInMenu onLogOut={this.handleLogOut} auth={auth}/>}
        {auth.isEmpty && <SignedOutMenu />}
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState)(NavBar)));
