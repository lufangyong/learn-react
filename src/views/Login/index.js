import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { setUserInfo } from '../../store/actions/userInfo';

import './index.scss';

const randomNum = function(min, max) {
  return min + Math.round(Math.random() * (max - min));
};

const bgCls = {
  background:
    'linear-gradient(to left bottom, hsl(' +
    randomNum(0, 255) +
    ', 100%, 85%) 0%,hsl(' +
    randomNum(0, 255) +
    ', 100%, 85%) 100%)'
};

@connect(
  state => state,
  { setUserInfo }
)
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {}
    };
  }

  submit = () => {
    window.localStorage.setItem('accessToken', 'tt');
    this.props.setUserInfo({
      uid: '001',
      userName: 'tt',
      name: 'tt',
      accessToken: 'tt'
    });
    this.props.history.push({
      pathname: '/'
    });
  };

  change = e => {
    let value = e.target.value,
      key = e.target.name;
    const formObj = {};
    formObj[key] = value;

    this.setState((prevState, props) => ({
      form: { ...prevState.form, ...formObj }
    }));
  };

  press = e => {
    if (e.keyCode === 13) {
      this.submit();
    }
  };

  render() {
    const form = this.state.form;
    return (
      <div className="login-wrapper" style={bgCls} onKeyDown={this.press}>
        <Form onSubmit={this.submit} className="login-form center">
          <div className="login-title">登录</div>
          <Input
            prefix={<Icon type="user" className="icon" />}
            value={form.name}
            name="name"
            placeholder="账号"
            onChange={this.change}
            className="u-input"
          />
          <Input
            prefix={<Icon type="lock" className="icon" />}
            value={form.password}
            name="password"
            type="password"
            placeholder="密码"
            onChange={this.change}
            className="u-input"
          />
          <Button
            className="btn"
            type="primary"
            // loading={status.loading}
            // disabled={!status.submit || status.loading}
            onClick={this.submit}
          >
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
