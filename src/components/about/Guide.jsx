import React from 'react'
import Steps from './Steps'
import Carousel from './Carousel'

function Guide() {
  return (
    <section id='guide' className='guide'>
        <div className='reveal-about row' style={{marginBottom: '15vw'}}>
            <div className='col-lg-4 '></div>
            <div className='col-lg-8 ' >
                <p className='guide-text' style={{ lineHeight: '1.8em'}}>Most innovation and marketing teams in high tech companies struggle with leveraging design to sell their products. Having worked with innovators for over 15 years, we understand how daunting the marketing and design process can be. In this time, Titus Klein developed a unique framework that helps these companies leverage branding and design to ensure the success of their IoT, AI and tech products.</p>
            </div>
        </div>
        <div className='row' style={{marginBottom: '15vw'}}>
            <div className='col-lg-4 reveal-about'>
                <p className='your-guide' style={{letterSpacing: '2px', fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', lineHeight: '1'}}>YOUR GUIDE</p>
                <p style={{letterSpacing: '0.4em', lineHeight: '1.9em', fontSize: '10px', fontFamily: 'Gotham-medium, sans-serif'}}>HELPING YOUR INNOVATORS</p>
            </div>
            <div className='col-lg-4 reveal-about'>
                <p className='guide-2-text' style={{fontSize: '16.5px'}}>Innovation is not a one-off effort, but a continuous process. Using our innovation-focused design framework, we’ve helped innovation and marketing teams unleash the potential of their technological advances by bridging the gap between R&D, product, and marketing teams to create revolutionary new products.</p>
            </div>
            <div className='col-lg-4 reveal-about'>
                <p className='guide-2-text' style={{fontSize: '16.5px'}}>Titus Klein focuses on turning your teams ideas and concepts into viable commercial products and revolutionary ecosystems that drive revenue and serve as a foundation for growth. Working with startups, we’ve helped innovation and marketing teams like yours launch over 200+ products in the last 15 years.</p>
            </div>
        </div>
        <Carousel />
        <div>
            <Steps />
        </div>
    </section>
  )
}

export default Guide