import React, { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'
import './Navbar.css'

const Navbar = ({ scrollToSection, refs }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav 
        isOpen={openMenu} 
        toggleMenu={toggleMenu} 
        scrollToSection={scrollToSection} 
        refs={refs} 
      />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src="./assets/images/logo.png" alt="" style={{ width: "50px", height: "50px" }} />

          <ul>
            <li>
              <a className='menu-item' onClick={() => scrollToSection(refs.heroRef)}>Home</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection(refs.skillsRef)}>Skills</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection(refs.workExperienceRef)}>Work Experience</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => scrollToSection(refs.contactMeRef)}>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="menu-icon">
              &#9776;
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
