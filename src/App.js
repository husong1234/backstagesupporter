import React from 'react';
import { Layout } from 'antd';
import Header from './common/component/Header/index';
import Slider from './common/component/Slider/index';

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
              Content
        </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
