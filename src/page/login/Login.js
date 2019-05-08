import React from 'react';
// import ReactDOM from 'react-dom';
import './login.css';

class Login extends React.Component {
  render(){
    return (
      <div className="login-bg">
        <div className="login layui-anim layui-anim-up">
          <div className="message">x-admin2.0-管理登录</div>
          <div id="darkbannerwrap"></div>
          <form method="POST" className="layui-form">
              <input type="text" name="username" placeholder="用户名" className="layui-input"/>
              <hr className="hr15"/>
              <input type="password" name="password" placeholder="密码" className="layui-input"/>
              <hr className="hr15"/>
              <input type="submit" value="登入"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;