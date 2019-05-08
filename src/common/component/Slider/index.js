import React from 'react';
import {
  Layout, Menu, Icon
} from 'antd';
const { Sider } = Layout;

class Slider extends React.Component {
  render () {
    return (
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
    )
  }
}

export default Slider;
