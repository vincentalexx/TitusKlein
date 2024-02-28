import React from 'react'
import Layout from '../Layout'
import './about.css'
import arrowbot from '../../assets/images/arrowbot.svg'
import Guide from './Guide'
import about2 from '../../assets/images/about2.jpeg'
import {motion} from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CarouselList } from './CarouselList'
import Carousel from './Carousel'
import Footer from '../Footer';


function About() {
  function revealabout() {
    const revealabout = document.querySelectorAll('.reveal-about');

    for (let i = 0; i < revealabout.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = revealabout[i].getBoundingClientRect().top;
      let revealPoint = 200;

      if (revealTop < windowHeight - revealPoint && revealTop > -200) {
        revealabout[i].classList.add('active-about');
        console.log('reveal-about');
      }
    }
  }
  window.addEventListener('scroll', revealabout);
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
          <div className='about-child'>
            <Guide />
          </div>
          <div className='reveal-about' style={{marginLeft: '-10vw', marginRight: '-10vw'}}>
              <img src={about2} alt="titus klein" style={{maxWidth: '100%'}}/>
          </div>
          <div style={{marginLeft: '-10vw', marginRight: '-10vw'}}>
            <Footer />
          </div>
        </div>
        
    </Layout>
  )
}

export default About