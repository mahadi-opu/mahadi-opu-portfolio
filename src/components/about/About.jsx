import React, {useState} from 'react';
import './about.css';
import { Col, Container, Row } from 'reactstrap';
import aboutImg from "../../assests/images/mahadi hasan opu.png"

import Education from './Education';
import Skills from './Skills';
import Award from './Award';




const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT');

    

    return (
        <section id='about'>
            <Container>
                <Row>
                    <Col lg="12" className='mb-5'>
                        <h2> About Me </h2>{" "}
                    </Col>

                    <Col lg="4" md="3">
                        <div className='about_btns d-flex flex-column align-items-center'>
                            <button 
                                className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ""}`}
                                onClick={()=> setAboutFilter('ABOUT')}> About me 
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ""}`}
                                onClick={()=> setAboutFilter('EDUCATION')}> Education 
                            </button>
                            <button 
                                className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ""}`}
                                onClick={()=> setAboutFilter('SKILLS')}> Skills
                            </button>
                            <button
                                 className={`about__btn ${aboutFilter === 'AWARD' ? 'about__btn-active' : ""}`}
                                 onClick={()=> setAboutFilter('AWARD')}> Award 
                            </button>
                        </div>
                    </Col>

                    <Col lg="8" md="9">
                        {aboutFilter === 'ABOUT' && (
                            <div className="about__content__wrapper d-flex gap-5">
                                <div className='about__img w-25'>
                                    <img src={aboutImg} alt="" className="w-100" />
                                </div>
                                <div className='about__content w-75'>
                                    <h2> I'm Syed Mahadi Hasan </h2>
                                    <p>I have developed One Page Website, Full Stack Web Application, eCommerce, Doctor Portals, 
                                        Portfolio websites, services, and more for various purposes. I have Used Javascript, Reactjs, NodeJs, 
                                        ExpressJS, Firebase, MongoDB, Heroku, email Js, JWTtoken, and many more in my Project.
                                    </p>
                                    <div className='social__link'>
                                        <h6 className='mb-3'> Connect with me: </h6>
                                        <span> <a href="https://www.linkedin.com/in/smhasanopu/"><i class="ri-linkedin-line"></i></a></span>
                                        <span> <a href="https://github.com/smhasanopu"> <i class="ri-github-line"></i> </a></span>
                                        <span> <a href="https://www.facebook.com/mahadihasanop/"> <i class="ri-facebook-line"> </i> </a></span>
                                        <span> <a href="#"> <i class="ri-youtube-line"></i> </a></span>
                                        <span> <a href="#"><i class="ri-instagram-line"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {
                            aboutFilter === 'EDUCATION' && <Education/>
                        }
                        {
                            aboutFilter === 'SKILLS' && <Skills/>
                        }
                        {
                            aboutFilter === 'AWARD' && <Award/>
                        }

                    </Col>
                </Row>
            </Container> 
        </section>
    );
};

export default About;