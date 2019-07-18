import React from 'react';
import { Layout, Menu, Icon, Drawer } from 'antd';
import { scroller, animateScroll as scroll } from "react-scroll";
import './Header.css';

const { Header } = Layout;

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

const menu = (classe, mode, onClose) => (
    <Menu
        theme="light"
        mode={mode}
        className={classe}
        selectable={false}
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

export default ({ onClose, visible, showDrawer }) => (
    <Header className="header">
        <div className="logo">
            SEVS
        </div>

        {menu('appBarMenu', 'horizontal')}
        
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