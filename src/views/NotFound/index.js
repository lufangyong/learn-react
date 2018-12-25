import React, { Component } from 'react';
import { Button } from 'antd';

import './index.scss';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-wrapper">
        <h1>404</h1>
        <div className="desc">抱歉，你访问的页面不存在</div>
        <Button type="primary">返回首页</Button>
      </div>
    );
  }
}

export default NotFound;
