import React, { Component } from 'react';

import { Layout } from 'antd';
import { scroller } from "react-scroll";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Info from './components/Info/Info';
import Features from './components/Features/Features';
import Systemprints from './components/SystemPrints/Systemprints';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

import { Background } from './styles/styles';

import './App.css';

const { Footer } = Layout;

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

  scrollTo = (sectionId) => { 
    return(
        scroller.scrollTo(sectionId, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -70
        }) 
    )
  }
  
  render () {
    return (

      <Layout className="layout" style={{ position: 'relative' }}>
        <Header 
        showDrawer={this.showDrawer} 
        onClose={this.onClose} 
        visible={this.state.visible} 
        menuBg={this.state.menuBg}
        scrollTo={this.scrollTo}
        />

        <Background />
        <Background 
        clipPath="polygon(0 11%, 100% 16%, 100% 100%, 0% 100%)"
        style={{ bottom: '0' }}
        mediumHeight="850px" largeHeight="850px" smallMediumHeight="800px" smallHeight="850px" />

        <Home />
        <Service />
        <Info />
        <Features />
        <Systemprints carouselHandle={this.carouselHandle} imagePosition={this.state.imagePosition} />
        <Pricing scrollTo={this.scrollTo} />

        
        <Contact />
        
        <Footer 
        style={
        { textAlign: 'center',
          zIndex: '1',
          background: 'transparent',
          color: 'white',
          borderTop: '5px solid rgba(255,255,255,0.5)' }
        }
        >Ant Design ©2018 Created by Ant UED</Footer>
        
      </Layout>
    );
  }
}

export default App;
