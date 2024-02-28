import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselList } from "./CarouselList";
import {motion} from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './about.css';

function Carousel() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  };
  
  return (
    <div className="slider-container reveal-about d-flex flex-column" style={{cursor: 'grab', position: 'relative'}}>
      <Slider {...settings}>
          {CarouselList.map((carousel) => {
            return (
              <div key={carousel.id} className="" style={{margin: '10px', width: '27vw'}}>
                <img src={carousel.img} alt={carousel.name} style={{width: '26vw', paddingRight: '10px', paddingTop: '10px', paddingLeft: '0px'}}/>
                <div style={{maxWidth: '350px', pointerEvents: 'none'}}>
                  <h3 style={{ letterSpacing: '5px', textTransform: 'uppercase', fontFamily: 'Gotham-medium, sans-serif', marginTop: '50px', fontSize: '20px', lineHeight: '1'}}>{carousel.name}</h3>
                  <p style={{ letterSpacing: '.4em', textTransform: 'uppercase', fontFamily: 'Gotham-light, sans-serif', marginBottom: '22px', fontSize: '10px', lineHeight: '1.9em'}}>{carousel.title}</p>
                  <p className="carousel-text">{carousel.text}</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
    // <div className="reveal-about" style={{maxWidth: '100vw', marginBottom: '10vw'}}>
    //   <motion.div className='carousel'>
    //     <motion.div className='inner-carousel' drag="x">
    //     {[...CarouselList, ...CarouselList].map((carousel) => {
    //       return (
    //         <div key={carousel.id} className="item" style={{margin: '10px'}}>
    //           <img src={carousel.img} alt={carousel.name} style={{width: '26vw', paddingRight: '10px', paddingTop: '10px', paddingLeft: '0px'}}/>
    //           <div style={{maxWidth: '350px'}}>
    //             <h3 style={{ letterSpacing: '5px', textTransform: 'uppercase', fontFamily: 'Gotham-medium, sans-serif', marginTop: '50px', fontSize: '20px', lineHeight: '1'}}>{carousel.name}</h3>
    //             <p style={{ letterSpacing: '.4em', textTransform: 'uppercase', fontFamily: 'Gotham-light, sans-serif', marginBottom: '22px', fontSize: '10px', lineHeight: '1.9em'}}>{carousel.title}</p>
    //             <p className="carousel-text">{carousel.text}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //     </motion.div>
    //   </motion.div>
    // </div>
  )
}

export default Carousel