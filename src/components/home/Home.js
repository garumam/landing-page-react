import React from 'react';
import { Row, Col,Typography } from 'antd';
import Slide from 'react-reveal/Slide';
import noteImg from '../../assets/home-image.png';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="50px" padTop="150px">
        <Row type="flex">
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center' }}
            >
                <Title style={{ color: 'white' }}>
                Ultimate Platform to monitor your best workflow.
                </Title>
                <Paragraph style={{ color: 'white' }}>
                For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!
                </Paragraph>
            </Col>
            <Col span={24}>
                <Slide bottom> 
                    <img src={noteImg} alt="Sistema SEVS" style={{ width: '100%' }} />
                </Slide>
            </Col>
        </Row>
    </Section>
);