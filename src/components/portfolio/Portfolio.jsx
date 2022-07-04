import React from 'react';
import './portfolio.css'

import { Col, Container, Row } from 'reactstrap';

import img01 from "../../assests/images/portfolio/portfolio-01.webp";
import img02 from "../../assests/images/portfolio/portfolio-02.webp";
import img03 from "../../assests/images/portfolio/portfolio-03.webp";
import img04 from "../../assests/images/portfolio/portfolio-04.webp";
import img05 from "../../assests/images/portfolio/portfolio-05.webp";
import img06 from "../../assests/images/portfolio/portfolio-06.webp";

const portfolioData =[
    {
        imgUrl:img01,
        title:'React Landing Page',
        url:'#'
    },
    {
        imgUrl:img02,
        title:'React Landing Page',
        url:'#'
    },
    {
        imgUrl:img03,
        title:'React Landing Page',
        url:'#'
    },
    {
        imgUrl:img04,
        title:'React Landing Page',
        url:'#'
    },
    {
        imgUrl:img05,
        title:'React Landing Page',
        url:'#'
    },
    {
        imgUrl:img06,
        title:'React Landing Page',
        url:'#'
    }
]
  




const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Row>
                    <Col lg="12" className='portfolio__top mb-5'>
                        <h6>Explore my work and give a feedback</h6>
                        <h2> Portfolio </h2>
                    </Col>

                    {
                        portfolioData.map((item,index)=>
                            <Col lg="4" md='6' sm='6' key={index} className='mb-4'>
                                <div className='portfolio__card'>
                                    <div className='portfolio__img'>

                                        <img src={item.imgUrl} alt="" className='w-100' />
                                    </div>
                                
                                    <div className='portfolio__content'>
                                        <h5> {item.title}</h5>
                                        <a href={item.url}> View live demo</a>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                  
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;