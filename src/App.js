import React, { Component } from 'react';

import { Layout } from 'antd';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Info from './components/Info/Info';
import Features from './components/Features/Features';
import Systemprints from './components/SystemPrints/Systemprints';

import { Background } from './styles/styles';

import './App.css';

const { Content, Footer } = Layout;

class App extends Component {
  constructor () {
    super();
    this.state = { visible: false, menuBg: '', imagePosition: 0 };
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
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
  }

  windowSizeChange = () => {
    if (this.state.visible) {
      let currentHideNav = (window.innerWidth < 650);
      if(!currentHideNav){
        this.setState({ visible: currentHideNav});
      } 
    } 
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const root = document.documentElement;

    if(scrollTop >= 50){
      if(this.state.menuBg !== 'newHeader'){
        root.style.setProperty('--heightpadrao', '70px');
        this.setState({ menuBg: 'newHeader'});
      }
    }else{
      if(this.state.menuBg !== ''){
        root.style.setProperty('--heightpadrao', '100px');
        this.setState({ menuBg: ''});
      }
    }
  }

  carouselHandle = (imagePosition) => {
    this.setState({
      imagePosition: imagePosition,
    });
  }

  render () {
    return (

      <Layout className="layout">
        <Header 
        showDrawer={this.showDrawer} 
        onClose={this.onClose} 
        visible={this.state.visible} 
        menuBg={this.state.menuBg}
        />

        <Background />

        <Content className="contentCustom">
          <Home />
          <Service />
          <Info />
          <Features />
          <Systemprints carouselHandle={this.carouselHandle} imagePosition={this.state.imagePosition} />

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
