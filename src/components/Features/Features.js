import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { Section } from '../../styles/styles';
import lampada from '../../assets/lampada.png';
import trofeu from '../../assets/trofeu.png';
import carta from '../../assets/carta.png';
import coracao from '../../assets/coracao.png';
import alvo from '../../assets/alvo.png';
import maos from '../../assets/maos.png';

const { Title, Paragraph } = Typography;

const features = (src, title, description) => (
    <Col span={24} md={{ span: 12 }} lg={{ span: 7 }}>
        <Card size="small" style={{ marginBottom: '35px' }}>
            <Row type="flex" align="middle">
                <Col span={6}>
                    <img src={src} alt="Baixar" style={{ paddingRight: '15px' }} />
                </Col>
                <Col span={18}>
                    <Title level={3}>
                    {title}
                    </Title>
                    <Paragraph>
                    {description}
                    </Paragraph>
                </Col>
            </Row>
        </Card>
    </Col>
);

export default () => (
    <Section id="feature_section" padBot="50px">
        <Row type="flex" justify="space-between" gutter={16}>
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <Title style={{color: '#1890ff'}}>
                FEATURES
                </Title>
                <Paragraph>
                Why you choose Our Plugin
                </Paragraph>
            </Col>
            {features(lampada, 'App Development', 'Get your proof tests delivered home collect a sample from the news get design.')}
            {features(trofeu, '10 Times Award', 'Get your proof tests delivered home collect a sample from the news get design.')}
            {features(carta, 'Cloud Storage', 'Get your proof tests delivered home collect a sample from the news get design.')}
            {features(coracao, 'Customization', 'Get your proof tests delivered home collect a sample from the news get design.')}
            {features(alvo, 'UX Planning', 'Get your proof tests delivered home collect a sample from the news get design.')}
            {features(maos, 'Customer Support', 'Get your proof tests delivered home collect a sample from the news get design.')}
        </Row>
    </Section>
);