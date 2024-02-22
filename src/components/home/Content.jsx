import React from 'react'
import sunglassgirl from '../../assets/images/sunglassgirl.jpeg'
import bottle from '../../assets/images/bottle.jpeg'
import './content.css'

function Content() {
  return (
    <section id='content' className='content'>
        <div className='drive d-flex flex-column flex-lg-row w-100'>
            <div className=' d-flex w-50' style={{position: 'static', marginBottom: '80px'}}>
                <img src={sunglassgirl} alt="sunglasses girl" className='sgg'/>
                <img src={bottle} alt="parfume" className='perfume' />
            </div>
            <div className='d-flex flex-column drive-text' style={{position: 'static'}}>
                <div>
                    <h4 className='mb-3' style={{fontSize: '12px', letterSpacing: '.4em', fontFamily: 'Gotham-medium, sans-serif'}}>INNOVATION BY DESIGN</h4>
                    <p className='' style={{fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', letterSpacing: '2px'}}>DRIVE REVENUE</p>
                    <p className='' style={{lineHeight: '2.6'}}>Discover how marketing and innovation teams leverage design to turn disruptive technologies into real products that generate revenue and earn consumer interest.</p>
                </div>
            </div>
        </div>
        <div></div>
    </section>
  )
}

export default Content