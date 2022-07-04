import React from 'react';
import './experience.css'
import { Col, Container, Row } from 'reactstrap';


const developmentExperienceData2 =[
   
    {
        company: ' PRAN RFL GROUP',
        year: ' 2018-2019 ',
        title: 'Sub Assistant Engineer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis veritatis' 
    },
    
    {
        company: 'Australian Education Counsel ',
        year: ' 2016-2018 ',
        title: 'IT Executive ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis veritatis' 
    }
    
    
]
const developmentExperienceData =[
    {
        company: ' Theme Shaper Limited ',
        year: '2022-Present',
        title: 'Junior Full Stack Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis veritatis' 
    },
    {
        company: ' IFAD Group ',
        year: '2019-2021',
        title: 'Executive Engineer ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis veritatis' 
    },
   
    
]


const Experience = () => {
    return (
        <section>
            <Container>
                <Row>

                    <Col lg='12' className='mb-5'>
                        <h2> Experience </h2>
                    </Col>

                    <Col lg='6'>
                        <div className='single__experience-container'>
                            {
                                developmentExperienceData.map((item,index)=> 
                                <div className='single__experience'>
                                    <span className='experience__icon'>
                                        <i class="ri-briefcase-line"></i> 
                                    </span>
                                    <h4> {item.company }</h4>
                                    <h6> {item.year} </h6>
                                    <h5>{item.title}</h5>
                                    <p> {item.desc}</p>
                                </div>
                                )
                            }
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className='single__experience-container'>
                            {
                                developmentExperienceData2.map((item,index)=> 
                                <div className='single__experience'>
                                    <span className='experience__icon'>
                                        <i class="ri-briefcase-line"></i> 
                                    </span>
                                    <h4> {item.company }</h4>
                                    <h6> {item.year} </h6>
                                    <h5>{item.title}</h5>
                                    <p> {item.desc}</p>
                                </div>
                                )
                            }
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            
        </section>
    );
};

export default Experience;