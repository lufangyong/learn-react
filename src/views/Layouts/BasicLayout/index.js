import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import routers from '@/router';
import NotFound from '@/views/NotFound';

import './index.scss';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: '/about'
  };

  componentWillMount() {
    const { pathname } = this.props.location;

    this.setState({
      defaultSelectedKeys: pathname
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { defaultSelectedKeys, collapsed } = this.state;
    return (
      <div className="basic-layout-container">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[defaultSelectedKeys]}
              defaultOpenKeys={['sub1']}
            >
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="home" />
                  <span>首页</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>个人中心</span>
                  </span>
                }
              >
                <Menu.Item key="/about">
                  {' '}
                  <Link to="about">about</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              {this.props.children}
              {/* 注入路由 */}
              <Switch>
                {routers.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                    />
                  );
                })}
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
