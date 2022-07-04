import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './services.css'

const servicesData = [
    {
        icon:'ri-code-line',
        title: 'web Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. esse sit amet consectetur adipisicing'
    },
    {
        icon:'ri-code-s-slash-line',
        title: 'web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. esse sit amet consectetur adipisicing'
    },
    {
        icon:'ri-qr-code-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. esse sit amet consectetur adipisicing'
    },
    {
        icon:'ri-search-line',
        title: 'SEO',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. esse sit amet consectetur adipisicing'
    },
    {
        icon:'ri-landscape-line',
        title: 'Graphic Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. esse sit amet consectetur adipisicing'
    },
    {
        icon:'ri-gallery-line',
        title: 'UI / UX ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. essesit amet consectetur adipisicing'
    }
    
]


const Services = () => {
    return (
        <section id='services'>
            <Container>
                <Row>
                    <Col lg="12" className='services_top mb-5'>
                        <h6> Features </h6>
                        <h2> What services I provide </h2>
                    </Col>

                    {
                        servicesData.map((item,index)=>
                            <Col lg="4" md="6" sm="6" key={index} className='mb-4'>
                                <div className='single__service'>
                                    <span className='service__icon'>
                                        <i class={item.icon}></i>
                                    </span>
                                    <h2>{item.title} </h2>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        )
                    }
                    
                </Row>
            </Container>
            
        </section>
    );
};

export default Services;