import React from 'react'
import bike from '../../assets/images/bike.jpg'
import laptop from '../../assets/images/laptop.jpg'
import triangle from '../../assets/images/triangle.jpg'
import phone from '../../assets/images/phone.jpg'

function Meeting() {
  return (
    <section id='meeting' className='' style={{marginBottom: '70px'}}>
        <div className='d-flex flex-column justify-content-center align-items-center reveal-home meeting' style={{marginBottom: '15vw'}}>
            <h4 className='mb-3' style={{fontSize: '12px', letterSpacing: '.4em', fontFamily: 'Gotham-medium, sans-serif'}}>INNOVATION BY DESIGN</h4>
            <p className='' style={{fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', letterSpacing: '2px'}}>SET UP A 15 MIN MEETING</p>
            <p className='text-center' style={{lineHeight: '2', fontSize: '16px', maxWidth: '400px', marginBottom: '25px'}}>Set up a call with one of our creative directors to discover how you can leverage design to enhance the launch of your products.</p>
            <button style={{fontFamily: 'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>SCHEDULE A CALL</button>
        </div>
        <div style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '3vw'}}>
            <p className='reveal-home meet-text' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '20px', letterSpacing: '0.1em', marginBottom: '30px'}}>VIEW OUR WORK</p>
            <div className='work'>
                <div className='work-child'>
                    <a href="#" className='reveal-home work-card text-decoration-none'>
                        <img src={bike} alt="bike" className='work-img'/>
                        <p className='work-text' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '15px', letterSpacing: '1', marginBottom: '30px', marginTop: '15px', color: '#303030'}}>RYDE</p>

                    </a>
                    <a href="#" className='reveal-home work-card text-decoration-none'>
                        <img src={laptop} alt="laptop" className='work-img'/>
                        <p className='work-text' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '15px', letterSpacing: '1', marginBottom: '30px', marginTop: '15px', color: '#303030'}}>ADA</p>
                    </a>
                </div>
                <div className='work-child'>
                    <a href="#" className='reveal-home work-card text-decoration-none'>
                        <img src={triangle} alt="triangle" className='work-img'/>
                        <p className='work-text' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '15px', letterSpacing: '1', marginBottom: '30px', marginTop: '15px', color: '#303030'}}>ESPY.</p>
                    </a>
                    <a href="#" className='reveal-home work-card text-decoration-none'>
                        <img src={phone} alt="phone" className='work-img'/>
                        <p className='work-text' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '15px', letterSpacing: '1', marginBottom: '30px', marginTop: '15px', color: '#303030'}}>D.A.S.H.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meeting