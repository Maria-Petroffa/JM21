import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormWrap } from './style';

class Main extends React.Component {
  render() {
    const { currentUser } = this.props;
    if (currentUser === 0) {
      return <Redirect to="/signin" />;
    }
    return (<FormWrap>Все получилось :)</FormWrap>);
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);
