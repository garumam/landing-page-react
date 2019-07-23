import React from 'react';
import { Row, Col, Typography, Card, Icon, Button } from 'antd';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

const iconsParameters = {
    colorCheckIcon: '#52c41a',
    colorCloseIcon: '#ff291e',
    checkIcon: 'check-circle',
    closeIcon: 'close-circle'
};

const includes = (text, iconType, color) => (
    <Row type="flex" justify="center">
        <Icon type={iconType} style={{ float: 'left', marginRight: '10px' }} theme="twoTone" twoToneColor={color} /> 
        <Paragraph>
        {text}
        </Paragraph>
    </Row>
);

export default ({ scrollTo }) => (
    <Section id="pricing_section" padBot="50px" padTop="50px" style={{ background: 'white' }}>
        <Row type="flex" justify="center">
            <Col 
            xs={{ span: 24 }} 
            sm={{ span: 22 }} 
            md={{ span: 20 }} 
            lg={{ span: 16 }} 
            style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <Title style={{color: '#1890ff'}}>
                PRICING PLAN
                </Title>
                <Paragraph>
                What’s our pricing subscription
                </Paragraph>
            </Col> 
        </Row>
        <Row type="flex" justify="center" align="middle" gutter={48}>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 7 }}>
                <Card bordered={false} size="small" style={{ marginBottom: '35px', textAlign: 'center' }}>
                    <Title level={3}>
                    Plano básico
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: '35px' }}>
                    Para aqueles que querem apenas os arquivos do sistema
                    </Paragraph>
                    <span style={{ fontSize: '2rem', color: 'black' }}>$500.00</span>
                    <Paragraph code type="secondary" style={{ marginBottom: '35px' }}>
                    Pagamento único
                    </Paragraph>
                    
                    <Button type="primary" ghost style={{ marginBottom: '35px' }}
                    onClick={() => scrollTo('contact_section')}>Entre em contato</Button>

                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}
                    {includes('Customizações', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}
                    
                </Card>
            </Col>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 7 }}>
                <Card bordered={false} size="small" style={{ marginBottom: '35px', textAlign: 'center' }}>
                    <Title level={3}>
                    Plano instalação
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: '35px' }}>
                    Para aqueles que querem o sistema já hospedado (pagamento da hospedagem não incluso)
                    </Paragraph>
                    <span style={{ fontSize: '2rem', color: 'black' }}>$1000.00</span>
                    <Paragraph code type="secondary" style={{ marginBottom: '35px' }}>
                    Pagamento único
                    </Paragraph>

                    <Button type="primary" ghost style={{ marginBottom: '35px' }}
                    onClick={() => scrollTo('contact_section')}>Entre em contato</Button>

                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Customizações', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}

                </Card>
            </Col>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 7 }}>
                <Card bordered={false} size="small" style={{ marginBottom: '35px', textAlign: 'center' }}>
                    <Title level={3}>
                    Plano customizado
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: '35px' }}>
                    Para aqueles que precisam de customizações no sistema
                    </Paragraph>
                    <span style={{ fontSize: '2rem', color: 'black' }}>$???.??</span>
                    <Paragraph code type="secondary" style={{ marginBottom: '35px' }}>
                    A combinar
                    </Paragraph>
        
                    <Button type="primary" ghost style={{ marginBottom: '35px' }}
                    onClick={() => scrollTo('contact_section')}>Entre em contato</Button>

                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Customizações', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}

                </Card>
            </Col>
        </Row>
    </Section>
);