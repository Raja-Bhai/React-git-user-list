import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import History from './history';
import HomePage from './container/HomePage';
import UserTable from './container/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={History}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/table" component={UserTable} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
