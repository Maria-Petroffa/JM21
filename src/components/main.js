import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Main extends React.Component {
  render() {
    const { currentUser } = this.props;
    if (currentUser === 0) {
      return <Redirect to="/signin" />;
    }
    return null;
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);
