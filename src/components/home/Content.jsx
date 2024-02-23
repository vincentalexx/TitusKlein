import React from 'react'
import sunglassgirl from '../../assets/images/sunglassgirl.jpeg'
import bottle from '../../assets/images/bottle.jpeg'
import box from '../../assets/images/box.jpg'
import './content.css'

function Content() {
  return (
    <section id='content' className='content'>
        <div className='w-100 d-flex flex-column'>
            <div className='drive d-flex flex-column flex-lg-row w-100' style={{marginBottom: '15vw'}}>
                <div className='drive-img d-flex w-50' style={{position: 'static'}}>
                    <img src={sunglassgirl} alt="sunglasses girl" className='sgg'/>
                    <img src={bottle} alt="parfume" className='perfume' />
                </div>
                <div className='d-flex flex-column drive-text' style={{position: 'static'}}>
                    <div>
                        <h4 className='mb-3' style={{fontSize: '12px', letterSpacing: '.4em', fontFamily: 'Gotham-medium, sans-serif'}}>INNOVATION BY DESIGN</h4>
                        <p className='' style={{fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', letterSpacing: '2px'}}>DRIVE REVENUE</p>
                        <p className='' style={{lineHeight: '2', fontSize: '16px'}}>Discover how marketing and innovation teams leverage design to turn disruptive technologies into real products that generate revenue and earn consumer interest.</p>
                    </div>
                </div>
            </div>
            <div className='ensure d-flex flex-column flex-lg-row-reverse w-100' style={{marginBottom: '15vw'}}>
                <div className='drive-img d-flex w-100 justify-content-end' style={{position: 'static'}}>
                    <img src={sunglassgirl} alt="sunglasses girl" className='car'/>
                    <img src={bottle} alt="parfume" className='books' />
                </div>
                <div className='d-flex flex-column drive-text' style={{position: 'static'}}>
                    <div>
                        <h4 className='mb-3' style={{fontSize: '12px', letterSpacing: '.4em', fontFamily: 'Gotham-medium, sans-serif'}}>INNOVATION BY DESIGN</h4>
                        <p className='' style={{fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', letterSpacing: '2px'}}>DRIVE REVENUE</p>
                        <p className='' style={{lineHeight: '2', fontSize: '16px'}}>Discover how marketing and innovation teams leverage design to turn disruptive technologies into real products that generate revenue and earn consumer interest.</p>
                    </div>
                </div>
            </div>
            <div className='drive d-flex flex-column flex-lg-row w-100' style={{marginBottom: '15vw'}}>
                <div className='d-flex captivate'>
                    <img src={box} alt="sunglasses girl" className='box'/>
                </div>
                <div className='d-flex flex-column drive-text' style={{position: 'static'}}>
                    <div>
                        <h4 className='mb-3' style={{fontSize: '12px', letterSpacing: '.4em', fontFamily: 'Gotham-medium, sans-serif'}}>INNOVATION BY DESIGN</h4>
                        <p className='captivate-text' style={{fontFamily: 'Gotham-bold, sans-serif', letterSpacing: '2px'}}>CAPTIVATE CUSTOMERS</p>
                        <p className='' style={{lineHeight: '2', fontSize: '16px'}}>Distinguish your brands with targeted design and marketing that translates your vision into compelling products.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Content