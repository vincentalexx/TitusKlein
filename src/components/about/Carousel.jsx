import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselList } from "./CarouselList";
import './about.css';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container d-flex flex-column" style={{cursor: 'grab', marginLeft: '18vw', position: 'relative'}}>
      {/* <Slider {...settings}> */}
          {CarouselList.map((carousel) => {
            return (
              <div key={carousel.id} className="" style={{margin: '10px', padding: '20px'}}>
                <img src={carousel.img} alt={carousel.name} style={{width: '26vw', paddingRight: '10px', paddingTop: '10px', paddingLeft: '0px'}}/>
                <div style={{maxWidth: '350px'}}>
                  <h3 style={{ letterSpacing: '5px', textTransform: 'uppercase', fontFamily: 'Gotham-medium, sans-serif', marginTop: '50px', fontSize: '20px', lineHeight: '1'}}>{carousel.name}</h3>
                  <p style={{ letterSpacing: '.4em', textTransform: 'uppercase', fontFamily: 'Gotham-light, sans-serif', marginBottom: '22px', fontSize: '10px', lineHeight: '1.9em'}}>{carousel.title}</p>
                  <p className="carousel-text">{carousel.text}</p>
                </div>
              </div>
            );
          })}
      {/* </Slider> */}
    </div>
  )
}

export default Carousel