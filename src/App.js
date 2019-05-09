import React from 'react';
import { Layout } from 'antd';
import Header from './common/component/Header/index';
import Slider from './common/component/Slider/index';
import UserPage from './page/user/index';
import OrderPage from './page/order/index';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Layout>
        <Header />
        <Layout>
          <Slider />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Layout.Content style={{
              background: '#fff', padding: 24, marginTop: 30, minHeight: 635,
            }}
            >
              <Switch>
                <Route exact path="/" component={UserPage}></Route>
                <Route exact path="/order" component={OrderPage}></Route>
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
