import React from 'react';
import Header from '@/common/component/Header/index';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

class User extends React.Component{
  render(){
    return (
      <Layout>
    <Header />
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">管理员列表</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="file-protect" />
          <span className="nav-text">订单列表</span>
        </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{
          background: '#fff', padding: 24, marginTop:30, minHeight: 635,
        }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
  }
}

export default User;
