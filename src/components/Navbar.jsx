import React from 'react'
import titusklein from '../assets/images/titusklein.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import arrow from '../assets/images/arrow.svg';
import { useRef } from 'react';

function Navbar() {
    const navRef = useRef();

  const showLayout = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <div>
        <div className='nav d-flex align-items-center justify-content-between' style={{ position: 'sticky', top: '0', zIndex:'88888'}}>
            <a href="">
            <img src={titusklein} alt="Titus Klein" style={{width: "180px", }}/>
            </a>
            <div className='text-decoration-none text-white fs-5' style={{cursor: 'pointer'}} onClick={showLayout}>
            <FaBars />
            </div>
        </div>
        <nav ref={navRef} className='menu d-flex flex-column '>
            <a href="/" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '125px'}}>HOME</a>
            <a href="/about" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '150px'}}>ABOUT</a>
            <a href="" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '133px' }}>WORK</a>
            <a href="" className='d-flex toggle text-decoration-none text-white align-items-end' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '435px'}}>PRESENTATIONS <p style={{fontSize: '21px', color: '#0ef', marginBottom: '7px', marginLeft: '15px'}}>NEW</p></a>
            <a href="" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '145px'}}>FOCUS</a>
            <a href="" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '210px'}}>CONTACT</a>
            <a href="" className='toggle text-decoration-none text-white' style={{ fontWeight: '700', letterSpacing: '0.3vw', paddingTop: '12px', paddingBottom: '12px', width: '250px'}}>MWC 2020</a>
            <a href="" className='startproject text-decoration-none text-white' style={{fontWeight: '700', letterSpacing: '0.2vw', paddingTop: '12px', paddingBottom: '12px', width: '320px', marginTop: '40px'}}>Start A Project
            <img src={arrow} alt="arrow" style={{width: '30px', marginLeft: '20px'}}/>
            </a>
        </nav>
    </div>

  )
}

export default Navbar