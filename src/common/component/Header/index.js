import React from 'react';
import { Layout } from 'antd';
import {Header} from './style';

class HeaderTop extends React.Component{
  render(){
    return (
      <Layout.Header className="header">
        <div className="logo" />
        <Header>
          <section className="left">
              <h1>后台管理系统</h1>
          </section>
          <section className="right">
            <div>
              <img src="https://upload.jianshu.io/users/upload_avatars/12760534/b13b976b-b063-4715-8674-e5dbd9de57c6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"/>
            </div>
            <a href="#">admin</a>
            <a href="#">前台首页</a>
          </section>
        </Header>
    </Layout.Header>
    )
  }
}
export default HeaderTop;
