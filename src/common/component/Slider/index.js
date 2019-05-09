import React from 'react';
import store from '@/store/index';
import { NavLink } from 'react-router-dom';
import {
  Layout, Menu, Icon
} from 'antd';
const { Sider } = Layout;


class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: store.getState().common.menus
    }

    //监听仓库
    store.subscribe(() => {
      this.setState(() => ({
        menus: store.getState().common.menus
      }))
    })
  }
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            this.state.menus.map((item, index) => {
              return (
                <Menu.Item key={index + 1}>
                  <NavLink to={item.href} exact>
                  <Icon type={item.icon} />
                  <span className="nav-text">{ item.name }</span>
                  </NavLink>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }

  componentDidMount(){
    //console.log(this.state.menus);
    console.log(this.state);
  }
}

export default Slider;
