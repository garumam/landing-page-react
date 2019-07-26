import React from 'react';
import { Row, Col,Typography } from 'antd';
import Slide from 'react-reveal/Slide';
import noteImg from '../../assets/home-image.png';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section id="home_section" padBot="50px" padTop="150px">
        <Row type="flex">
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center' }}
            >
                <Title style={{ color: 'white' }}>
                Sistema de gestão integrado para vidraçarias e serralherias
                </Title>
                <Paragraph style={{ color: 'white' }}>
                Um sistema que traz funcionalidades necessárias para gerir micro e pequenas empresas a um baixo custo!
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