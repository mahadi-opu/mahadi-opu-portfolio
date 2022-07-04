import React from 'react';
import './testimonials.css';

import Slider from 'react-slick'

import { Col, Container, Row } from 'reactstrap';



const Testimonials = () => {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed:3000,
        swipeToSlide:true
    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center'>
                        <h2> What my Clients says </h2>
                    </Col>
                    <Col lg="6" className='m-auto'>
                        <Slider {...settings}>
                            <div>
                                <div className='single_testimonial'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et cupiditate incidunt!
                                         Quis itaque veniam nostrum id expedita aspernatur omnis eius deleniti
                                          maiores accusamus fuga amet eaque, pariatur beatae rerum?</p>
                                    <h6> Martain Cooper </h6>
                                    <p className='title'> Web Developer </p>
                                </div>
                            </div>
                            <div>
                                <div className='single_testimonial'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et cupiditate incidunt!
                                         Quis itaque veniam nostrum id expedita aspernatur omnis eius deleniti
                                          maiores accusamus fuga amet eaque, pariatur beatae rerum?</p>
                                    <h6> Martain Cooper </h6>
                                    <p className='title'> Web Developer </p>
                                </div>
                            </div>
                            <div>
                                <div className='single_testimonial'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et cupiditate incidunt!
                                         Quis itaque veniam nostrum id expedita aspernatur omnis eius deleniti
                                          maiores accusamus fuga amet eaque, pariatur beatae rerum?</p>
                                    <h6> Martain Cooper </h6>
                                    <p className='title'> Web Developer </p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;