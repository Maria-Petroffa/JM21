import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import SignIn from './form/signIn';
import SignUp from './form/signUp';
import Main from './main';
import { Content, FormWrap } from './style';
import HeaderPage from './header/header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Content>
          <HeaderPage />
          <Switch>
            <Route exact path="/home">
              <Main />
            </Route>
            <Route exact path="/signin">
              <FormWrap>
                <SignIn />
              </FormWrap>
            </Route>
            <Route exact path="/signup">
              <FormWrap>
                <SignUp />
              </FormWrap>
            </Route>
          </Switch>
        </Content>
      </Router>
    );
  }
}

export default App;
