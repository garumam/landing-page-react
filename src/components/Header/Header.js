import React from 'react';
import { Layout, Menu, Icon, Drawer } from 'antd';
import { scroller, animateScroll as scroll } from "react-scroll";
import './Header.css';
import styled from "styled-components";

const { Header } = Layout;

export const Background = styled.div`
    height:600px;
    background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(0,145,255,1) 100%);
`;

const scrollTo = (sectionId) => { 
    return(
        scroller.scrollTo(sectionId, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -70
        }) 
    )
}

const menu = (classe, mode, onClose,style) => (
    <Menu
        theme="light"
        mode={mode}
        className={classe}
        selectable={false}
        style={style}
    >
        {[{text: 'HOME'},
        {text: 'FUNCIONALIDADES', section: 'feature_section'}, 
        {text: 'PREÇO', section: '#'}, 
        {text: 'CONTATO', section: '#'}].map((value) => (
            <Menu.Item 
            key={value.text} 
            style={{ verticalAlign: 'unset', borderBottom: 'unset' }}
            onClick={() => {(onClose && onClose()); value.text === 'HOME'? scroll.scrollToTop() : scrollTo(value.section);}}>
                {value.text}
            </Menu.Item>
        ))}
    </Menu>
)

export default ({ onClose, visible, showDrawer, style }) => (
    <Header className="header" style={style}>
        <div className="logo">
            SEVS
        </div>

        {menu('appBarMenu', 'horizontal',null,style)}
        
        <Icon type="menu-fold" className="menuIcon" onClick={showDrawer} />

        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
            {menu('drawerMenu', 'vertical', onClose)}
        </Drawer>        
    </Header>
);