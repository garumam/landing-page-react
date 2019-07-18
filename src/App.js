import React, { Component } from 'react';

import { Layout } from 'antd';
import Header from './components/Header/Header';

import './App.css';

const { Content, Footer } = Layout;

class App extends Component {
  constructor () {
    super();
    this.state = { visible: false };
    this.windowSizeChange = this.windowSizeChange.bind(this);
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.windowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowSizeChange);
  }

  windowSizeChange() {
    if (this.state.visible) {
      let currentHideNav = (window.innerWidth < 650);
      if(!currentHideNav){
        this.setState({ visible: currentHideNav});
      } 
    } 
  }

  render () {
    return (

      <Layout className="layout">
        <Header showDrawer={this.showDrawer} onClose={this.onClose} visible={this.state.visible} />
        <Content style={{ padding: '0 50px' }}>
  
          <div style={{ height: '1400px' }}></div>
  
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  
      // <div className={classes.root}>
      //   <Header />
      //   <Home />
      //   <Service />
      //   <Info />
      //   <Feature />
      //   <SystemPrints />
      // </div>
    );
  }
}

export default App;
