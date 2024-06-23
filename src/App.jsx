import React, { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

const App = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, skillsRef, workExperienceRef, contactMeRef }} />
      <div className='container'>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={workExperienceRef}>
          <WorkExperience />
        </div>
        <div ref={contactMeRef}>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
