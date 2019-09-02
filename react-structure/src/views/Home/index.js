import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from "redux";
// import * as userAction from "../../store/actions/userInfo";
import { setUserInfo, updateUserInfo } from '../../store/actions/userInfo';
import { Button } from 'antd';

import './index.scss';

@connect(
  state => {
    return { userInfo: state.userInfo };
  },
  { setUserInfo, updateUserInfo }
)
class Home extends Component {
  static propTypes = {
    userInfo: PropTypes.object
  };

  // constructor(props, context) {
  //   super(props, context);
  // console.log("props", this.props);
  // }

  modifyUserName = () => {
    this.props.updateUserInfo({
      name: 'jack'
    });
  };

  render() {
    const { userInfo } = this.props;

    return (
      <div className="home-wrapper">
        Home
        <div className="user">用户名：{userInfo.name}</div>
        <Button onClick={this.modifyUserName}>修改用户名</Button>
      </div>
    );
  }
}

export default Home;

// const mapStateToProps = (state, ownProps) => ({
//   userInfo: state.userInfo
// });
//
// const mapDispatchToProps = {
//   setUserInfo,
//   updateUserInfo
// };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(userAction, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
