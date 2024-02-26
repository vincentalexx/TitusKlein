import React from 'react'
import Layout from '../Layout'
import './work.css'

function Work() {
  return (
    <div className='work-page'>
      <Layout>
        <div className="ryde work-section">
          <div className="title">
            <h1 className="h1 text-white" style={{ letterSpacing: "-1px" }}>
              RYDE
            </h1>
            <p className="desc">
            In an ever incising effort to design more sustainable product solutions, Ryde’s parent company set out to create a rental bike concept that would change the transportation industry.
            </p>
            <a href="#guide">
              <button className='btn-dash' style={{fontFamily:  'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="dash reveal work-section">
          <div className="title">
            <h1 className="h1" style={{ letterSpacing: "-1px", color: 'rgb(50, 54, 56)' }}>
              DASH
            </h1>
            <p className="desc" style={{color: 'rgb(50, 54, 56)'}}>
            Ericsson understands our world is increasingly more connected. To help us interact with what we value most they created an IoT eco-system to make our lives easier.</p>
            <a href="#guide">
              <button className='btn-ryde' style={{fontFamily:  'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="ada reveal work-section">
          <div className="title">
            <h1 className="h1 text-white" style={{ letterSpacing: "-1px" }}>
              ADA
            </h1>
            <p className="desc">
            Ericsson innovated a next-generation AI network. They promised it would predict network problems, provide solutions, and optimize performance. It was genius. But it didn't exist. Yet.</p>
            <a href="#guide">
              <button className='btn-ryde' style={{fontFamily:  'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="espy reveal work-section">
          <div className="title">
            <h1 className="h1" style={{ letterSpacing: "-1px", color: 'rgb(50, 54, 56)'}}>
              ESPY
            </h1>
            <p className="desc" style={{color: 'rgb(50, 54, 56)'}}>
            A digital answer to an analog problem. Espy needed to build trust with consumers that when things get lost, Espy gets to work.</p>
            <a href="#guide">
              <button className='btn-ryde' style={{fontFamily:  'Gotham-light, sans-serif', backgroundColor: 'rgb(50, 54, 56)', letterSpacing: '0.3em', padding: '15px 29px', fontSize: '11px', border: '0', marginTop: '15px', color: 'white'}}>VIEW PROJECT</button>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Work