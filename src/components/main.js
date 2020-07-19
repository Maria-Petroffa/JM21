import React from 'react';
import { connect } from 'react-redux';
import { FormWrap } from './style';
import { currentUser } from '../store/actions';

class Main extends React.Component {
  render() {
    return (<FormWrap>Все получилось :)</FormWrap>);
  }
}

const mapStateToProps = (state) => state;
const mapDispathToProps = (dispatch) => ({
  checkCurrentUser: (value) => dispatch(currentUser(value)),
});

export default connect(mapStateToProps, mapDispathToProps)(Main);
