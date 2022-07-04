import React, { Fragment } from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HeroSection from '../hero-section/HeroSection';
import Portfolio from '../portfolio/Portfolio';
import Services from '../services/Services';
import Testimonials from '../testimonials/Testimonials';


const Layout = () => {
    return (
        <Fragment>            
            <Header/>
            <HeroSection/>
            <About />
            <Services/>
            <Experience/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
};

export default Layout;