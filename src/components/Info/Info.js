import React from 'react';
import { Row, Col,Typography } from 'antd';
import Slide from 'react-reveal/Slide';
import dashImg from '../../assets/home-image.png';
import smartOne from '../../assets/sevs-responsivo-1.png';
import smartTwo from '../../assets/sevs-responsivo-2.png';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="30px" padTop="30px" style={{ background: 'white',marginBottom: '50px' }}>
        <Row type="flex" align="middle" justify="space-between">
            <Col span={24} md={{ span: 12 }}>
                <Slide left cascade duration={1300}>
                    <div style={{ position: 'relative' }}>
                        <img src={dashImg} alt="Dashboard SEVS" style={{ paddingBottom: '35px' }} />
                        <img onMouseOver={(e) => {e.currentTarget.src = smartOne}}
                        onMouseOut={(e) => {e.currentTarget.src = smartTwo}}
                        src={smartTwo} 
                        alt="SEVS responsivo" 
                        style={{ position: 'absolute', top: '12%', left: '70%', width: '25%' }} />
                    </div>
                </Slide>
            </Col>
            <Col span={24} md={{ span: 10 }}>
                <Title>
                Gerencie sua empresa de qualquer lugar
                </Title>
                <Paragraph type="secondary">
                O SEVS é uma aplicação web totalmente responsiva para que possa ser utilizada em diferentes dispositivos como smartphones, notebooks, tablets, etc..., bastando apenas estar conectado a internet.
                </Paragraph>
            </Col>
        </Row>
    </Section>
);