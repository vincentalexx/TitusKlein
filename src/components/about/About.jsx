import React from 'react'
import Layout from '../Layout'
import './about.css'
import arrowbot from '../../assets/images/arrowbot.svg'
import Guide from './Guide'
import about2 from '../../assets/images/about2.jpeg'
import Carousel from './Carousel'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function About() {
  return (
    <Layout>
        <div className="about">
          <div className="title-about">
            <h1 className="h1 text-white" style={{ letterSpacing: "-1px" }}>
              IMPACT BY DESIGN.
            </h1>
            <p className="desc">
              Learn how innovative teams like yours leverage design to increase revenue, position products, and grow market share.
            </p>
            <a href="#guide">
              <img src={arrowbot} alt="" style={{ width: "30px" }} />
            </a>
          </div>
        </div>
        <div className='about-child'>
          <Guide />
          <Carousel />
        </div>
        <div className='reveal'>
            <img src={about2} alt="titus klein" style={{maxWidth: '100%'}}/>
        </div>
        
    </Layout>
  )
}

export default About