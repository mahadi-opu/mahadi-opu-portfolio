import React, { useEffect } from 'react';
import './hero-section.css'
import { Col, Container, Row } from 'reactstrap';

import { init } from 'ityped'

import heroImg from '../../assests/images/mahadi hasan opu.png'
import { useRef } from 'react';



const HeroSection = () => {

  const textRef = useRef()
  useEffect(() =>{
    init(textRef.current,{
        backDelay:1500,
        showCursor:false,
        strings:[
            'Mahadi Hasan',
            'Software Engineer ',
            'Content Creator',
            'youtuber'
        ]
    });
  },[]);

 
    return (
        <section className='hero__section' id='home'>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className='hero__content'>
                            <p className='mb-3'> welcome to my world! </p>
                            <h5 className='mb-4'> Hi</h5>
                            <h2 className='hero_title mb-4'>
                                I'm <span ref={textRef}> </span>
                            </h2>
                            <p>Professionally worked as a Jr.Software Engineer ( Full Stack Developer )at ThemeShaper.net.
                                Apprenticeship Assistant Secretary Programming NUBCC. I'm pursuing my Bachelor's in Computer Science & Engineering from Northern University Bangladesh.
                            
                            </p>

                            <div className='mt-5 hero_btns d-flex align-items-center gap-4'>
                                <button className='btn hire__btn'><a href="#"> Hire Me</a></button>
                                <button className='btn'> Contact </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                            <div className='hero__img' 
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                            <img src={heroImg} alt="mahadi-opu" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;