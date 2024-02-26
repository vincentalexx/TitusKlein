import React from 'react'
import './about.css'

function Steps() {
  return (
    <div>
        <div className='row' style={{marginBottom: '15vw'}}>
            <div className='next-steps col-lg-4 reveal' style={{marginBottom: '2vw'}}>
                <p className='your-guide' style={{letterSpacing: '2px', fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', lineHeight: '1'}}>NEXT STEPS</p>
                <p style={{letterSpacing: '0.4em', lineHeight: '1.9em', fontSize: '10px', fontFamily: 'Gotham-medium, sans-serif'}}>HOW TO PARTNER WITH US</p>
                <button className='btn-talk reveal' style={{fontFamily: 'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>LET'S TALK</button>
            </div>
            <div className='col-lg-4 reveal'>
                <div style={{marginBottom: '6vw'}}>
                    <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>30 Min Meeting</p>
                    <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>Discover how TK can help your team optimize design and marketing to launch effective campaigns.</p>
                </div>
                <div style={{marginBottom: '6vw'}}>
                    <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>Innovation Blueprint</p>
                    <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>TK will audit your specific structure and build a creative blueprint for your team and all initiatives.</p>
                </div>
            </div>
            <div className='col-lg-4 reveal'>
                <div style={{marginBottom: '6vw'}}>
                    <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>Dedicated Creative Team</p>
                    <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>Do your teams have immediate needs? TK can assemble a team to help accomplish a single project.</p>
                </div>
                <div style={{marginBottom: '6vw'}}>
                    <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>Design Project</p>
                    <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>Discover how engaging a specialized innovation design/marketing team can accelerate the success of your launch and drive revenue.</p>
                </div>
            </div>
        </div>

        <div className='row' style={{marginBottom: '5vw'}}>
            <div className='col-lg-4 reveal'>
                <p className='your-guide' style={{letterSpacing: '2px', fontFamily: 'Gotham-bold, sans-serif', fontSize: '34px', lineHeight: '1'}}>LOCATIONS</p>
                <p style={{letterSpacing: '0.4em', lineHeight: '1.9em', fontSize: '10px', fontFamily: 'Gotham-medium, sans-serif'}}>WHERE WE WORK</p>
            </div>
            <div className='loc-text col-lg-4 reveal' >
                <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>San Francisco</p>
                <p className='guide-2-text mb-0' style={{fontSize: '16.5px', maxWidth: '410px'}}>388 Market St.</p>
                <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>San Francisco, CA.</p>
            </div>
            <div className='loc-text col-lg-4 reveal' >
                <p className='fw-semibold' style={{fontFamily: 'Gotham-medium, sans-serif', fontSize: '24px', lineHeight: '1',}}>Santa Cruz</p>
                <p className='guide-2-text mb-0' style={{fontSize: '16.5px', maxWidth: '410px'}}>1260 41st. Ave Suite i</p>
                <p className='guide-2-text' style={{fontSize: '16.5px', maxWidth: '410px'}}>Capitola, CA 95010</p>
            </div>
        </div>
    </div>
  )
}

export default Steps