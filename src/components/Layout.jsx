import React from 'react';
import '../App.css'
import Navbar from './Navbar';

function Layout({children}) {
  function reveal() {
    const reveal = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveal.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveal[i].getBoundingClientRect().top;
      let revealPoint = 200;

      if (revealTop < windowHeight - revealPoint && revealTop > -200) {
        reveal[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <div className='' style={{width: '100vw', height: '100vh', backgroundColor: '#222222'}}>
      <Navbar/>
      <div className='' style={{top: '0', position: 'absolute'}}>
        {children}
      </div>
    </div>
  );
}

export default Layout;