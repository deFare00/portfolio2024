import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu, scrollToSection, refs }) => {
  const handleMenuClick = (sectionRef) => {
    scrollToSection(sectionRef);
    toggleMenu(); // Close the mobile menu after scrolling
  };

  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
          <img className='logo' src="./assets/images/logo.png" alt="" />

          <ul>
            <li>
              <a className='menu-item' onClick={() => handleMenuClick(refs.heroRef)}>Home</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => handleMenuClick(refs.skillsRef)}>Skills</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => handleMenuClick(refs.workExperienceRef)}>Work Experience</a>
            </li>
            <li>
              <a className='menu-item' onClick={() => handleMenuClick(refs.contactMeRef)}>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
