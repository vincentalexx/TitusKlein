import React from 'react'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'
import '../App.css'

function Footer() {
  return (
    <div className='footer'>
        <a href="#" className='text-decoration-none mb-0' style={{maxWidth: '400px', fontSize: '13px', color: 'black'}}>© 2021 Titus Klein</a>
        <a href="#" className='text-decoration-none mb-0 footer-contact' style={{maxWidth: '400px', fontSize: '13px', color: 'black'}}>Contact</a>
        <div className='d-flex logs'>
          <a href="#" className='f-logo d-flex align-items-center'>
            <img src={linkedin} alt="linkedin" style={{height: '20px', width: '20px', marginBottom: '0'}}/>
          </a>
          <a href="#" className='f-logo d-flex align-items-center'>
            <img src={twitter} alt="linkedin" style={{height: '20px', width: '20px', marginBottom: '0'}}/>
          </a>
          <button className='btn-top' style={{backgroundColor: 'rgb(50, 54, 56)', padding: '10px 16px', fontSize: '9px', border: '0', color: 'white', letterSpacing: '0.3em'}}>TOP</button>
        </div>
    </div>
  )
}

export default Footer