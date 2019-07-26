import React from 'react';
import { Row, Col,Typography } from 'antd';
import Slide from 'react-reveal/Slide';
import noteImg from '../../assets/home-image.png';
import { Section } from '../../styles/styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section id="home_section" padBot="50px" padTop="150px">
        <Row type="flex" justify="center">
            <Col 
            xs={24}
            sm={22}
            md={20} 
            lg={16} 
            style={{ textAlign: 'center' }}
            >
                <Title style={{ color: 'white' }}>
                Sistema de gestão integrado para vidraçarias e serralherias
                </Title>
                <Paragraph style={{ color: 'white' }}>
                Um sistema que traz funcionalidades necessárias para gerir micro e pequenas empresas a um baixo custo!
                </Paragraph>
            </Col>
            <Col>
                <Slide bottom> 
                    <img src={noteImg} alt="Sistema SEVS" style={{ maxHeight: '600px' }} />
                </Slide>
            </Col>
        </Row>
    </Section>
);