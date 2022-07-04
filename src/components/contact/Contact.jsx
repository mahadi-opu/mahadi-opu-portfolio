import React from 'react';
import './contact.css';

import { Col, Container, Row } from 'reactstrap';
import Form from '../form/Form';

const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2> Get In Touch </h2>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className=' contact_info-container d-flex align-items-center gap-5'>
                            <div className='single__info-box w-50'>
                                <h6> Address </h6>
                                <p> Bangladesh, Asian Country </p>
                            </div>
                            <div className='single__info-box w-50'>
                                <h6> Phone </h6>
                                <p> +880 1924 224 778 </p>
                            </div>
                        </div>

                        <div className=' contact_info-container d-flex align-items-center gap-5'>
                            <div className='single__info-box w-50'>
                                <h6> Email </h6>
                                <p> smhasanopu@gmail.com </p>
                            </div>
                            <div className='single__info-box w-50'>
                                <h6> Location  </h6>
                                <p> Jessore, 7460 Bangladesh </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <Form/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;