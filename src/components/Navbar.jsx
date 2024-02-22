import titusklein from '../assets/images/titusklein.svg';
import '../App.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import arrow from '../assets/images/arrow.svg';
import Home from './home/Home';

function Navbar({children}) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <div className='' style={{width: '100vw', height: '100vh', }}>
      <div className='nav d-flex align-items-center justify-content-between' style={{backgroundColor: "rgb(27, 25, 27)", position: 'sticky', top: '0', zIndex:'88888'}}>
        <a href="">
          <img src={titusklein} alt="Titus Klein" style={{width: "180px", }}/>
        </a>
        <div className='text-decoration-none text-white fs-5' style={{cursor: 'pointer'}} onClick={showNavbar}>
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
      <div>{children}</div>

      {/* <div className='home'>
        <div className='title'>
          <h1 className='h1 text-white' style={{letterSpacing: '-1px'}}>DESIGN + BRANDING.</h1>
          <p className='desc'>Titus Klein is a B2B branding and design agency with a B2C look and feel. We help your large tech company or startup unlock the revenue potential of your ideas.</p>
          <a href="">
            <img src={arrowbot} alt="" style={{width: '30px'}}/>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;