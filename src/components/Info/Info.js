import React from 'react';
import { Row, Col,Typography } from 'antd';
import Slide from 'react-reveal/Slide';
import dashImg from '../../assets/dash-4-img1.png';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="50px">
        <Row type="flex" gutter={16} align="middle">
            <Col span={24} md={{ span: 13 }}>
                <Slide left>
                    <img src={dashImg} alt="Dashboard SEVS" style={{ paddingBottom: '35px' }} />
                </Slide>
            </Col>
            <Col span={24} md={{ span: 11 }}>
                <Title>
                Make your website growth with next level visitors
                </Title>
                <Paragraph>
                For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!.
                </Paragraph>
            </Col>
        </Row>
    </Section>
);