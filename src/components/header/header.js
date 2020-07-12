import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Header, HeaderItem, HeaderSignIn, HeaderSignUp,
} from './style';
import {
  logOutUser,
} from '../../store/actions';

class HeaderPage extends React.Component {
  signInHeader = () => {
    const { currentUser, logOut } = this.props;
    if (currentUser !== 0) {
      return (
        <HeaderItem>
          <HeaderSignIn>{currentUser.user.username}</HeaderSignIn>
          <HeaderSignUp>
            <Link onClick={logOut} to="/signin">
              Log Out
            </Link>
          </HeaderSignUp>
        </HeaderItem>
      );
    }
    return null;
  };

  render() {
    return (
      <Header>
        <HeaderItem>Realworld Blog</HeaderItem>
        {this.signInHeader()}
      </Header>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispathToProps = (dispatch) => ({
  logOut: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispathToProps)(HeaderPage);
