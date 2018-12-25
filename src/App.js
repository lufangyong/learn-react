import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '@/common/util/axios';
import BasicLayout from '@/views/Layouts/BasicLayout';
import Login from '@/views/Login';
import { updateUserInfo } from './store/actions/userInfo';

import './App.scss';

@connect(
  state => {
    return { userInfo: state.userInfo };
  },
  { updateUserInfo }
)
class App extends Component {
  componentWillMount() {
    // this.getData();
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      this.props.updateUserInfo({
        accessToken
      });
    }
  }

  getData = () => {
    axios.get('/api/v1/blink/classic').then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact={true} path="/login" component={Login} />
            {localStorage.getItem('accessToken') ? (
              ''
            ) : (
              <Redirect to="/login" />
            )}
            <BasicLayout />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
