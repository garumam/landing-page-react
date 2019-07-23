import React, { Component } from 'react';
import { Row, Col, Typography, Form, Icon, Input, Button } from 'antd';
import { Section } from '../../styles/styles';

import './Contact.css';

const { Title, Paragraph } = Typography;

class Contact extends Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Section id="contact_section" padBot="50px" padTop="50px">
                
                <Row type="flex" justify="center">
                    <Col 
                    xs={{ span: 24 }} 
                    sm={{ span: 22 }} 
                    md={{ span: 20 }} 
                    lg={{ span: 16 }} 
                    style={{ textAlign: 'center', marginBottom: '50px' }}
                    >
                        <Title style={{color: 'white'}}>
                        CONTATO
                        </Title>
                        <Paragraph style={{color: 'white'}}>
                        Nós envie uma mensagem através do formulário abaixo
                        </Paragraph>
                    </Col>
                    <Col span={24} md={{ span: 12 }}>
                        <Form onSubmit={this.handleSubmit} className="contact-form">
                            <Form.Item>
                            {getFieldDecorator('client', {
                                rules: [{ required: true, message: 'Por favor preencha o seu nome!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nome"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Por favor preencha o e-mail!' },{type: 'email', message: 'O e-mail ainda não é válido!'}],
                            })(
                                <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-mail"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('message', {
                                rules: [{ required: true, message: 'Por favor digite sua mensagem!' }, { max: 1000, message: 'A mensagem pode ter no máximo 1000 caracteres!' }],
                            })(
                                <Input.TextArea
                                rows={8}
                                placeholder="Mensagem"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" className="contact-form-button">
                                    Enviar
                                </Button>       
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Section>
        );
    }
}

const ContactForm = Form.create({ name: 'normal_contact' })(Contact);

export default ContactForm;