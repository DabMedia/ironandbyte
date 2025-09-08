import React from 'react'
import Banner from '../component/Banner'
import ServicesSlider from '../component/ServicesSlider '
import HowitWorks from '../component/HowitWorks'
import WhyChooseUs from '../component/WhyChooseUs'
import About from './About '
import Contact from './Contact '

const Home = () => {
    return (
        <>
            <Banner />
            <ServicesSlider />
            <HowitWorks />
            <WhyChooseUs />
            <About />
            <Contact />
        </>
    )
}

export default Home
