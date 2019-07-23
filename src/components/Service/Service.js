import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { Section, Span } from '../../styles/styles';
import download from '../../../src/assets/download.svg';
import paper from '../../../src/assets/paper.svg';
import box from '../../../src/assets/box.svg';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="50px">
        <Row type="flex" justify="space-between" gutter={16}>
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <Title style={{color: '#1890ff'}}>
                WORKING PROCESS
                </Title>
                <Paragraph>
                Our Featured Service that We Provide
                </Paragraph>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 7 }}>
                <Card style={{ marginBottom: '35px' }}>
                    <Span>1</Span>
                    <img src={download} alt="Baixar" style={{ marginBottom: '35px' }} />
                    <Title level={3}>
                    Download our app
                    </Title>
                    <Paragraph type="secondary">
                    Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                    </Paragraph>
                </Card>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 7 }}>
                <Card style={{ marginBottom: '35px' }}>
                    <Span>2</Span>
                    <img src={paper} alt="Baixar" style={{ marginBottom: '35px' }} />
                    <Title level={3}>
                    Create a free account
                    </Title>
                    <Paragraph type="secondary">
                    Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                    </Paragraph>
                </Card>
            </Col>
            <Col span={24} md={{ span: 12, offset: 6 }} lg={{ span: 7, offset: 0 }}>
                <Card style={{ marginBottom: '35px' }}>
                    <Span>3</Span>
                    <img src={box} alt="Baixar" style={{ marginBottom: '35px' }} />
                    <Title level={3}>
                    Now Start your journey
                    </Title>
                    <Paragraph type="secondary">
                    Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.
                    </Paragraph>
                </Card>
            </Col>
        </Row>
    </Section>
);