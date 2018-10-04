import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

const logoText = {
  fontFamily: 'Righteous',
  fontSize: '2em',
  color: 'black'
};

const navStyles = {
  marginTop: '10px',
  borderBottom: '1px solid black'
};

const mapState = state => ({
  auth: state.firebase.auth
})

class NavBar extends Component {
  handleLogOut = () => {
    this.props.firebase.logout();
  };
  render() {
    const { auth } = this.props
    return (
      <Menu size="huge" fixed="top" text style={navStyles}>
        <Menu.Item>
          <Header style={logoText}>p i c k u p s</Header>
        </Menu.Item>
        {!auth.isEmpty && <SignedInMenu onLogOut={this.handleLogOut} auth={auth}/>}
        {auth.isEmpty && <SignedOutMenu />}
      </Menu>
    );
  }
}

export default withFirebase(connect(mapState)(NavBar));
